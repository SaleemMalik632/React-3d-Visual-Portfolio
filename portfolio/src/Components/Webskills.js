import { Grid } from '@mui/material';
import React from 'react';
import Skillcard from './Skillcard';

function Webskills() {
  const cartDataArray = [
    {
      Name: 'Python',
      value: 80,
      persent: 80
    },
    {
      Name: 'JavaScript',
      value: 90,
      persent: 90
    },
    {
      Name: 'React',
      value: 85,
      persent: 85
    },
    {
      Name: 'HTML',
      value: 95,
      persent: 95
    },
    {
      Name: 'CSS',
      value: 75,
      persent: 75
    }
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