import React from 'react';
import clsx from 'clsx';
import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, IconButton, List, ListItem, ListItemText, TextField, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {makeStyles, useTheme} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow: 1
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
   hide: {
      display: 'none',
    },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  title: {
       flexGrow: 1
  }
}))
function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [close, setClose] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false)
    }
    const handleDrawerOpen = () => {
      setClose(true);
    };
    const handleDrawerClose = () => {
      setClose(false);
    };
    return (
      <>
        <AppBar position="fixed" 
        className={clsx({
          [classes.appBarShift]: close,
        })}>
        <Container fixed>
          <Toolbar>
             <IconButton 
            //  edge="start" color="inherit" aria-label="menu" className={classes.menuButtom}
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
                >
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
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={close}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />      
      </Drawer>
      </>
    )
}

export default Header
