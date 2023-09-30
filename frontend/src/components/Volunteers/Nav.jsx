import React from 'react';
import logo from './acblogo.png';

const Nav = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="ACB Logo" className="logo" />
            <div className="right__side">
            <ul className="nav__tabs">
                            <li className="nav__tab"><a className="nav__tab--anchor red" href="">John Doe</a></li>
                            <li className="nav__tab"><a className="nav__tab--anchor black" href="">Profile</a></li>
                            <li className="nav__contact"><a href="#" className="nav__contact--text">Log Out</a></li>
                        </ul>
            </div>
        </div>
    );
}

export default Nav;