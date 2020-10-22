import React, { FC } from 'react';
import { Link, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  texCopyRight: {
    color: '#fff',
    htmlFontSize: 10,
    textAlign: 'center',
  },
  font: {
    fontSize: '12px',
  },
  navigation: {
    color: '#61dafb',
  },
}));

const Copyright: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.texCopyRight}>
      <Typography component="p" className={classes.font}>
        &copy;
        <Link
          href="https://material-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navigation}
        >
          THIS MATERIAL UI
        </Link>{' '}
        {new Date().getFullYear()}. All rights reserved
      </Typography>
    </div>
  );
};

export default Copyright;
