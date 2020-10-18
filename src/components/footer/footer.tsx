import React from 'react';
import { BottomNavigation, BottomNavigationAction, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Apps from './apps';
import SocialFollow from './social-follow';
import Navigation from './navigation';
import Copyright from './copyright';

const useStales = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footerTop: {
    marginTop: theme.spacing(9),
  },
  footerColor:{
    color: "inherit",
    backgroundColor: "#1E2125",
  },
  line:{
    width: "100%",
    color: "default"
  }
}));

function Footer() {
  const classes = useStales();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Grid container direction="column">
      {/* <Typography variant="h6" align="center" gutterBottom className={classes.footerTop}>
        Footer
      </Typography>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation> */}
      {/* <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
        Material Ui React tsx site
      </Typography> */}
      <Grid container justify="space-between" className={classes.footerColor}>
        <Grid item xs={12} sm={6}>
          <img 
          className="logo-icon"
          src="material-ui.svg"
          alt="logo"
          width="5%"
      />
          <Typography color="inherit" component="h6" variant="subtitle1" align="left">
            Material UI
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}> 
          <Apps /> 
        </Grid>    
      <hr className={classes.line}/>
      <Grid container justify="space-between">
          <Grid item xs={6} sm={4} className="order-1 sm:order-1">
            <Navigation />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            className="order-3 self-end  pb-4 sm:order-2"
          >
            <Copyright />
          </Grid>
          <Grid item xs={6} sm={4} className="order-2 sm:order-3 pb-4">
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-end"
              className="h-full"
            >
              <Grid item className="grow-1">
                <SocialFollow />
              </Grid>             
            </Grid>
          </Grid>
        </Grid>
        </Grid>  
    </Grid>
  )
}

export default Footer;
