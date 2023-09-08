import React from 'react';
import { Grid } from '@mui/material';
import Profile from './Pics/Saleem Malik.jpeg'
import Aboutm from './Aboutm';
import  Followme from './Followme';

const Mainabout = () => {
    return (
        <Grid container marginTop={10} spacing={5}>
            <Grid item lg={4} xs ={12}  sm={4} md={4}>
            <Followme />
            </Grid>
            <Grid item lg={4} xs ={12}  sm={4} md={4} className='about-grid'>
                <Aboutm  />
            </Grid>
        </Grid>
    )
}

export default Mainabout