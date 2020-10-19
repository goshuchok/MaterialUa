import React, {FC} from 'react';
import { Grid, Link} from '@material-ui/core';

const Apps: FC = () => {
    return (
        <Grid container spacing={3} 
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            style={{margin: "0px"}}>    
          <Grid item xs={6} sm={3}>
            <Link 
                href="https://www.apple.com/ios/app-store/"
                target="_blank"
                rel="noopener noreferrer"
            > 
                <img 
                    className="logo-icon"
                    src="app-store.svg"
                    alt="logo"
                    width="75%"
                    style={{float: "right"}}
                />         
            </Link>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Link 
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    className="logo-icon"
                    src="google-play.svg"
                    alt="logo"
                    width="75%"    
                    style={{float: "left"}}                    
                />   
            </Link>
          </Grid>
        </Grid>
    )
}

export default Apps;
