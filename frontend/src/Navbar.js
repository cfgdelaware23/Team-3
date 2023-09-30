import React from 'react';
import logo from './img/acbLogo.png'; // Adjust the path if required

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="ACB Logo" className="logo" />
            <button className="login-btn">Login</button>
        </div>
    );
}

export default Navbar;
