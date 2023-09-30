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
        <ul className="nav__tabs">
          {loggedIn ? (
            <div>
              <button
                className="nav__contact"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="nav__contact">
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
