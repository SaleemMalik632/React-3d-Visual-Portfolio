import React from 'react'
import Slider from '@mui/material/Slider';

const Skillcard = ({CartData}) => { 
    return (
        <>
            <div className='skill-card' >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h2>{CartData.Name}</h2>
                    <h2>{CartData.persent}%</h2>
                </div>
                <Slider
                    disabled
                    defaultValue={CartData.value}
                    sx={{ '& .MuiSlider-track': { backgroundColor: 'green' ,height:'10px'}, marginRight: '20px', }}
                />

            </div>
        </>
    )
}

export default Skillcard