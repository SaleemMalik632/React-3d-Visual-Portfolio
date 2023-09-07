import React from 'react';
import Logo from './Pics/yti3-removebg-preview.png';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='main-header'>
            <div className='main-head-block'>
                <div className='caintainer-logo'>
                    <img src={Logo} className='logo' alt='Loading...' />
                </div>
                <div className="icon" onClick={toggleMenu}>
                    <MenuIcon style={{ fontSize: '3rem' }} />
                </div>
                <div className={`nav-elements ${isMenuOpen && 'active'}`}>
                    <ul>
                        <li>
                            <a href='#' >ABOUT
                            </a>
                        </li>
                        <li>
                            <a href='#' >SKILL</a>
                        </li>
                        <li>
                            <a href='#' >PORTFOLIO</a>
                        </li>
                        <li>
                            <a href='#' >CONTACT</a>
                        </li>
                        <li>
                            <a href='#' >BLOG</a>
                        </li>
                        <li>
                            <Button variant="outlined" sx={{ color: '#fff', border: '2px solid green' }} size="medium">
                                RESUME
                            </Button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header