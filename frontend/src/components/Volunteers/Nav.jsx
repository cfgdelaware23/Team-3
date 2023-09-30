import React from 'react';
import logo from './acblogo.png';

const Nav = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="ACB Logo" className="logo" />
            <div className="right__side">
            <h2 className='user__name'>John Doe</h2>    
            
            </div>
        </div>
    );
}

export default Nav;