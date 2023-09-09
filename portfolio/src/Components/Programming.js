import { Grid } from '@mui/material';
import React from 'react';
import Skillcard from './Skillcard';

function Webskills() {
    const cartDataArray = [
        {
          Name: 'C',
          value: 70,
          persent: 70
        },
        {
          Name: 'C++',
          value: 65,
          persent: 65
        },
        {
          Name: 'C#',
          value: 75,
          persent: 75
        },
        {
          Name: 'Python',
          value: 80,
          persent: 80
        },
        {
          Name: 'Flutter',
          value: 70,
          persent: 70
        },
        {
          Name: 'JavaScript',
          value: 90,
          persent: 90
        },
      ];
      
    return (
        <>
            <Grid container spacing={2} >
                {
                    cartDataArray.map((carddata, index) => (
                        <Grid item xs={12} md={6} key={index}> 
                            <Skillcard CartData={carddata} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Webskills