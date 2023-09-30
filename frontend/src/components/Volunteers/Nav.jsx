import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./acblogo.png";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
        <ul className="nav__tabs">
          {loggedIn ? (
            <div>
              <button
                className="nav__contact"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="nav__contact"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="nav__contact"
                onClick={() => {
                  localStorage.clear();
                }}
              >
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
