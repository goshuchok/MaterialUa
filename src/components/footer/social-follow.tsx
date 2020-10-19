import React, { FC } from 'react'
import { Grid, Link, makeStyles, Typography } from '@material-ui/core'
import OdnoklassnikiIcon from 'mdi-material-ui/Odnoklassniki';
import VkIcon from 'mdi-material-ui/Vk';
import InstagramIcon from 'mdi-material-ui/Instagram';
import FacebookIcon from 'mdi-material-ui/Facebook';
import TwitterIcon from 'mdi-material-ui/Twitter';

const useStyles = makeStyles((themes) => ({
  colorSocial: {
    color: "#61dafb"
  },
  all:{
    alignItems: "center"
  }
}))

const SocialFollow : FC = () => {
  const classes = useStyles();
  return(
        <Grid className={classes.all}>
          <Typography component="span">
              <Link href="https://ok.ru/" target="_blank" rel="noopener noreferrer">
              <OdnoklassnikiIcon fontSize="large" className={classes.colorSocial}/>
              </Link>
          </Typography>  
          <Typography component="span" className="ml-3 sm:ml-6">
            <Link href="https://vk.com/" target="_blank" rel="noopener noreferrer">
              <VkIcon fontSize="large"  className={classes.colorSocial}/>
            </Link>
          </Typography>
          <Typography component="span" className="ml-3 sm:ml-6">
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" className={classes.colorSocial}/>
            </Link>
          </Typography>
          <Typography component="span" className="ml-3 sm:ml-6">
            <Link
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon fontSize="large" className={classes.colorSocial}/>
            </Link>
          </Typography>
          <Typography component="span" className="ml-3 sm:ml-6">
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon fontSize="large" className={classes.colorSocial}/>
            </Link>
          </Typography>
        </Grid> 
  )
}

export default SocialFollow;
