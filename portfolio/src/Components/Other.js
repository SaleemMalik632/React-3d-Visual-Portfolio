import { Grid } from '@mui/material';
import React from 'react';
import Skillcard from './Skillcard';

function Webskills() {
    const cartDataArray = [
        {
            Name: 'React Native',
            value: 80,
            persent: 80
        },
        {
            Name: 'Electron Js',
            value: 90,
            persent: 90
        },
        {
            Name: 'Johnny five',
            value: 85,
            persent: 85
        },
        {
            Name: 'Selte',
            value: 95,
            persent: 95
        },
        {
            Name: 'Redux',
            value: 75,
            persent: 75
        },
        {
            Name: 'GrapgQL',
            value: 80,
            persent: 80
        }
        ,
        {
            Name: 'Jest',
            value: 65,
            persent: 65
        }
        ,
        {
            Name: 'Mocho',
            value: 65,
            persent: 65
        }
        ,
        {
            Name: 'SVG',
            value: 80,
            persent: 80
        }
        ,
        {
            Name: 'Cypress',
            value: 80,
            persent: 80
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