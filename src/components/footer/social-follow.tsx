import React, { FC } from 'react'
import { Grid, Link, Typography } from '@material-ui/core'
import OdnoklassnikiIcon from 'mdi-material-ui/Odnoklassniki';
import VkIcon from 'mdi-material-ui/Vk';
import InstagramIcon from 'mdi-material-ui/Instagram';
import FacebookIcon from 'mdi-material-ui/Facebook';
import TwitterIcon from 'mdi-material-ui/Twitter';

const SocialFollow : FC = () => (
    <Grid>
        <Typography component="span">
            <Link href="https://ok.ru/" target="_blank" rel="noopener noreferrer">
            <OdnoklassnikiIcon fontSize="large" />
            </Link>
        </Typography>  
        <Typography component="span" className="ml-3 sm:ml-6">
      <Link href="https://vk.com/" target="_blank" rel="noopener noreferrer">
        <VkIcon fontSize="large" />
      </Link>
    </Typography>
    <Typography component="span" className="ml-3 sm:ml-6">
      <Link
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon fontSize="large" />
      </Link>
    </Typography>
    <Typography component="span" className="ml-3 sm:ml-6">
      <Link
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon fontSize="large" />
      </Link>
    </Typography>
    <Typography component="span" className="ml-3 sm:ml-6">
      <Link
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon fontSize="large" />
      </Link>
    </Typography>
    </Grid>
)

export default SocialFollow
