import React from 'react';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStales = makeStyles((theme) => ({
    root:{
      flexGrow: 1,
    },
    footerTop:{
      marginTop: theme.spacing(9),
    },
  }));

function Footer() {
    const classes = useStales(); 
    const [value, setValue] = React.useState("recents");
  
    const handleChange = (event: any, newValue: any) => {
      setValue(newValue);
    };
    return (
        <>
           <Typography variant="h6" align="center" gutterBottom className={classes.footerTop}> 
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
      </BottomNavigation>      
      <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
        Material Ui React tsx site
      </Typography> 
        </>
    )
}

export default Footer;
