import React, {FC} from 'react';
import { Grid, Link } from '@material-ui/core';

const Apps: FC = () => {
    return (
        <Grid container direction="row" className="justify-center sm:justify-end">
            <Grid component="span" item>            
                <Link 
                    href="https://www.apple.com/ios/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img 
                        className="logo-icon"
                        src="app-store.svg"
                        alt="logo"
                        width="15%"
                    />         
                </Link>
            </Grid>
            <Grid component="span" className="ml-12">
                <Link 
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                        className="logo-icon"
                        src="google-play.svg"
                        alt="logo"
                        width="15%"
                    />             
                </Link>
            </Grid>
        </Grid>
    )
}

export default Apps;
