import React from 'react'
import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow: 1
  },
  menuButtom: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))
function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false)
    }
    return (
        <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
             <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButtom}>
               <MenuIcon />
             </IconButton>
             <Typography variant="h6" className={classes.title}>Material</Typography>
             <Box mr={3}>
               <Button color="inherit" variant="outlined" 
               onClick={handleClickOpen}
               >Log In</Button>
               <Dialog 
                open={open} 
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log in</Button>
                </DialogActions>
               </Dialog>
             </Box>
             <Button color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
    )
}

export default Header
