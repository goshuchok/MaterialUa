import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
  logo:{
    color: "#61dafb",
    float: "left",
    margin: "1rem 0.8rem"
  },
  line:{
    width: "100%",
    color: "default",
    margin: "0"
  } 
}));

function Footer() {
  const classes = useStales();
  
  return (
    
    <Grid container direction="column">
      <Grid container justify="space-between" className={classes.footerColor}>
        <Grid item xs={12} sm={6}>
          <img 
            className={classes.logo}
            src="material-ui.svg"
            alt="logo"
            width="42px"
            height="42px"
          />
          <Typography component="h6" variant="subtitle1" className={classes.logo}>
            Material UI
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}> 
          <Apps /> 
        </Grid>    
      <hr className={classes.line}/>
      <Grid container justify="space-between" alignItems="flex-end">
          <Grid item xs={6} sm={4}>
            <Navigation />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Copyright />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-end"
              className="h-full"              
            >
              <Grid item xs style={{marginRight:"1.5rem"}}>
                <SocialFollow />
              </Grid>             
            </Grid>
          </Grid>
        </Grid>
          {/* <Grid container spacing={3} justify="space-between" alignItems="flex-end">
            <Grid item xs >
              <Navigation />
            </Grid>
            <Grid item xs={6}>
              <Copyright />
            </Grid>
            <Grid item xs>
              <SocialFollow />
            </Grid>
          </Grid> */}
        </Grid>  
    </Grid>
  
  )
}

export default Footer;
