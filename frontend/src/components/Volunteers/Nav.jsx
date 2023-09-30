import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./acblogo.png";

import { useNavigate, useHistory } from "react-router-dom";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  console.log(currentUser);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("currentUser"))) {
      setLoggedIn(true);
    }
  });
  return (
    
    <div className="navbar">
      <img src={logo} alt="ACB Logo" className="logo" />
      <div className="right__side">
        <ul className="nav__tabs" role="tablist">
          {loggedIn ? (
            <div>
              <button
                className="nav__contact"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                role="tab">
                Log Out
              </button>
            </div>
          ) : (
            <div className="nav__links--new">
              <Link to="/login" className="nav__contact" role="tab">
                Login
              </Link>
              <Link
                to="/sign-up"
                className="nav__contact"
                onClick={() => {
                  localStorage.clear();
                }}
                role="tab">
                Sign Up
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
