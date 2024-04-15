import { Grid } from '@mui/material';
import React from 'react';
import Profile from './Pics/Saleem Malik.jpeg'
import { Button } from '@mui/material';


function Aboutme() {
    return (
        <>
            <div className='About-Me-cantainer'>
                <Grid container spacing={7}>
                    <Grid item lg={6} sm={6} mb={6} xs={12} xl={6}>
                        <p style={{ maxWidth: '350px', lineHeight: '30px', textAlign: 'justify' }}>
                            Hello! I'm Saleem Malik, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.
                        </p>
                        <div>
                            <Button variant="contained" size="large" sx={{ backgroundColor: 'green', color: 'white' }}>GET RESUME</Button>
                            <Button variant="outlined" size="large" sx={{ marginLeft: '10px', border: '2px solid green', color: 'white' }} >MY skills</Button>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={6} mb={6} xs={12} xl={6}>
                        <div>
                            <img src={Profile} alt='Loading...' className='profile' />
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default Aboutme