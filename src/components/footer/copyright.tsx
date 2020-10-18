import React, {FC} from 'react';
import { Typography } from '@material-ui/core';


const Copyright: FC = () => {
    return (
        <Typography component="p" className="text-center mt-12 sm:mt-0" color="primary"> 
            &copy;{new Date().getFullYear()} 
            THIS MATERIAL UI | All rights reserved | Terms Of Services | Privacy
        </Typography>
    )
}

export default Copyright;
