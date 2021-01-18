import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';

function Navbar() {
        return (
            <div className='container-satu'>
                <div className='navbar'>
                <div>
                    <Link className='part lima' to='/contributor'>Contributor</Link>
                </div>
                <div>
                    <Link className='part empat' to='/rj-card'>RJ Card</Link>
                </div>
                <div>
                    <Link className='part tiga' to='/bp-card'>Blackpink Card</Link>
                </div>
                <div>
                    <Link className='part dua' to='/about-me'>About Me</Link>
                </div>
                <div>
                    <Link className='part satu' to='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;