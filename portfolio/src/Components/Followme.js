import React from 'react'
import { FaFacebook, FaGithub , FaLinkedinIn , FaTwitter } from 'react-icons/fa';

function Followme() {
    return (
        <>
            <div className='media-class'>
                <ul >
                    <li>
                        <a href='#' rel='noopener noreferrer'><FaFacebook size={30} className='malik' /></a>
                    </li>
                    <li>
                        <a href='#' rel='noopener noreferrer'><FaGithub size={30} className='malik' /></a>
                    </li>
                    <li>
                        <a href='#' rel='noopener noreferrer'><FaLinkedinIn size={30}  className='malik'/></a>
                    </li>
                    <li>
                        <a href='#' rel='noopener noreferrer'><FaTwitter size={30}  className='malik'/></a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Followme