import React from 'react';
import { Button } from '@mui/material';
import Profile from './Pics/Saleem Malik.jpeg'

const Aboutm = () => {
    return (
        <>
            <div className='about-catainer'>
                <p style={{ color: 'green', fontSize: '25px', marginBottom: '-70px' }}>Hello! I am</p>
                <h1 style={{ fontSize: '75px' }}>Saleem Malik</h1>
                <h2 style={{ marginTop: '-40px', color: 'green' }}>Full Stack Developer</h2>
                <ul>
                    <li>
                        Web Developer
                    </li>
                    <li>
                        Programmer
                    </li>
                    <li>
                        Software Engineer
                    </li>
                </ul>
                <div>
                    <Button variant="contained" size="large" sx={{ backgroundColor: 'green', color: 'white' }}>GET RESUME</Button>
                    <Button variant="outlined" size="large" sx ={{ marginLeft: '10px', border: '2px solid green', color: 'white' }} >ABOUT ME</Button>
                </div>
            </div>
            {/* <div>
                    <img src={Profile} alt='Loading...' style={{width:'400px' , height:'400px' , borderRadius:'300px' }} />
                </div> */}

        </>
    )
}

export default Aboutm