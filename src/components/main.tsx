import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStales = makeStyles((theme) => ({
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundOverlay: 'rgba(0,0,0,.3)',
  },
  mainFeatersPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
}));
function Main() {
  const classes = useStales();
  return (
    <div>
      <Paper
        className={classes.mainFeaturesPost}
        style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
      >
        <Container fixed>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeatersPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  MaterialUa Site
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
                  laboriosam sed! Molestiae commodi voluptas minus deleniti
                  excepturi eaque, temporibus incidunt tempora ipsa repudiandae
                  velit earum quas, ipsam quod. At, esse?
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn more
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}

export default Main;
