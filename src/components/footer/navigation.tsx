import React, { FC } from 'react';
import { Box, List, ListItem, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStales = makeStyles((theme) => ({
  color:{
    color: "#61dafb",
    textDecoration: "none"
  }
}))

const Navigation : FC = () => {
  const classes = useStales();
    return (
        <Box component="nav">
            <List dense={true} className="p-0">
                <ListItem className="p-0">
                  <NavLink to="/" className={classes.color}>
                    Contact
                  </NavLink>
                </ListItem>
                <ListItem className="p-0">
                  <NavLink to="/" className={classes.color}>
                    Contact
                  </NavLink>
                </ListItem> 
                <ListItem className="p-0">
                  <NavLink to="/" className={classes.color}>
                    Contact
                  </NavLink>
                </ListItem> 
                <ListItem className="p-0">
                  <NavLink to="/" className={classes.color}>
                    Contact
                  </NavLink>
                </ListItem>             
            </List>
            
        </Box>
    )
}

export default Navigation;