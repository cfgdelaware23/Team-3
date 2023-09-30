import React from 'react';
import logo from './acblogo.png';

const Nav = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="ACB Logo" className="logo" />
            <div className="right__side">
            <ul className="nav__tabs" role="tablist">
                            <li className="nav__tab"><a className="nav__tab--anchor red" href="" role="tab">John Doe</a></li>
                            <li className="nav__tab"><a className="nav__tab--anchor black" href="" role="tab">Profile</a></li>
                            <li className="nav__contact"><a href="#" className="nav__contact--text" role="tab">Log Out</a></li>
                        </ul>
            </div>
        </div>
    );
}

export default Nav;