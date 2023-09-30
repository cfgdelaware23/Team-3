import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./acblogo.png";

import { useNavigate, useHistory } from "react-router-dom";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  console.log(currentUser);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("currentUser"))) {
      // currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setLoggedIn(true);
    }
  });
  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="ACB Logo" className="logo" />
      </a>
      <div className="right__side">
        <ul className="nav__tabs" role="tablist">
          {loggedIn ? (
            <div className="right__side">
              <h1 style={{marginTop: 5, marginRight: 8}}>{currentUser.name}</h1>
              { currentUser?.role === "admin" && (
                <Link className="nav__contact" to="/host">
                  Manage Events
                </Link>
              )}
              <Link className="nav__contact" to="/profile">
                Profile
              </Link>
              <button
                className="nav__contact"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                  window.location.reload();
                }}
                role="tab"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="introNavButton">
              <Link to="/login" className="nav__contact nav_button" role="tab">
                Login
              </Link>
              <Link
                to="/sign-up"
                className="nav__contact nav_button"
                onClick={() => {
                  localStorage.clear();
                }}
                role="tab"
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
