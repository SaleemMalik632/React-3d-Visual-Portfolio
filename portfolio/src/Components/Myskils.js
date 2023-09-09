import React, { useState } from 'react';
import { ToggleButtonGroup } from '@mui/material';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';


const ToggleButtonExample = () => {
    const [selected, setSelected] = useState('button1');

    const handleAlignment = (event, newSelected) => {
        setSelected(newSelected);
    };
    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        '&.Mui-selected, &.Mui-selected:hover': {
            color: 'white',
            backgroundColor: selectedColor,
            fontWeight: 'bold'

        }
    }))

    return (
        <>
            <div className='skill'>
                <ToggleButtonGroup
                    value={selected}
                    exclusive
                    onChange={handleAlignment}
                >
                    <ToggleButton selectedColor="green" value="Web" style={{ margin: '5px', border: '2px solid green', borderRadius: '5px', color: 'white', paddingLeft: '20px', paddingRight: '20px' }}>
                        Web
                    </ToggleButton>
                    <ToggleButton selectedColor="green" value="others" style={{ margin: '5px', border: '2px solid green', borderRadius: '5px', color: 'white', paddingLeft: '20px', paddingRight: '20px' }}>
                        others
                    </ToggleButton>
                    <ToggleButton selectedColor="green" value="Programming" style={{ margin: '5px', border: '2px solid green', borderRadius: '5px', color: 'white', paddingLeft: '20px', paddingRight: '20px' }}>
                        Programming
                    </ToggleButton>
                    <ToggleButton selectedColor="green" value="Tools" style={{ margin: '5px', border: '2px solid green', borderRadius: '5px', color: 'white', paddingLeft: '20px', paddingRight: '20px' }}>
                        Tools
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            {selected === 'Web' && 'web page'}
            {selected === 'others' && 'others page'}
            {selected === 'Programming' && 'Programming page'}
            {selected === 'Tools' && 'Tools page'}
        </>
    );
};

export default ToggleButtonExample;
