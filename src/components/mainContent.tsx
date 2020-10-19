import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {makeStyles} from '@material-ui/core/styles';

const useStales = makeStyles((theme) => ({
    mainContent:{},
    mainButtons:{},
    cardGrid:{
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    card:{},
    cardMedia:{
      paddingTop: "56.25%"
    },
    cardContent:{
      flexGrow: 1
    },
    
  }));
  
  const cards = [1,2,3,4,5,6,7,8,9];

function MainContent() {
    const classes = useStales();
    return (
        <>
        <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>MaterialUi Sites</Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Exercitationem dolorum quo asperiores saepe autem pariatur nulla, 
              iure quod blanditiis! Magni rem sed nemo voluptatibus, 
              unde cupiditate repellat aut doloremque suscipit.
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={5} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Start now</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">Learn more</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md"> 
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Blog post
                  </Typography>
                  <Typography >
                    Blog post. MaterialUi, MaterialUi.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card> 
            </Grid>
          ))}
        </Grid>
      </Container>
      </>
    )
}

export default MainContent;
