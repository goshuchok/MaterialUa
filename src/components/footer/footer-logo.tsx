import React, { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStales = makeStyles((theme) => ({
  logo: {
    color: '#61dafb',
    float: 'left',
    margin: '1rem 0.8rem',
  },
}));

const FooterLogo: FC = () => {
  const classes = useStales();
  return (
    <div>
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
    </div>
  );
};

export default FooterLogo;
