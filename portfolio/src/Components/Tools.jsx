import { Grid } from '@mui/material';
import React from 'react';
import Skillcard from './Skillcard';

function Webskills() {
    const cartDataArray = [
        {
          Name: 'Visual Studio Code',
          value: 90,
          persent: 90
        },
        {
          Name: 'Git',
          value: 85,
          persent: 85
        },
        {
          Name: 'Docker',
          value: 80,
          persent: 80
        },
        {
          Name: 'JIRA',
          value: 75,
          persent: 75
        },
        {
          Name: 'Postman',
          value: 85,
          persent: 85
        },
        {
          Name: 'Slack',
          value: 75,
          persent: 75
        },
        {
          Name: 'Trello',
          value: 80,
          persent: 80
        },
        {
          Name: 'Firebase',
          value: 70,
          persent: 70
        },
        {
          Name: 'Notion',
          value: 85,
          persent: 85
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