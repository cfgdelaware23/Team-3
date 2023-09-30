import React, { useState } from "react";
import "./Profile.css";
import profilepic from "./blankk.jpeg";
import logo from "../Volunteers/acblogo.png";

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("Profile: ", currentUser);
  console.log("ev: ", currentUser.events);

  const fetchUser = async () => {
    const res = await fetch("");
  };


  return (
    <>
      {/* <div className="navbar">
        <img src={logo} alt="ACB Logo" className="logo" />
        <div className="right__side">
          <ul className="nav__tabs">
            <li className="nav__tab">
              <a className="nav__tab--anchor red" href="">
                {currentUser.name}
              </a>
            </li>
            <li className="nav__contact">
              <a className="nav__contact--text" href="">
                Profile
              </a>
            </li>
            <li className="nav_tab">
              <a href="#" className="nav__tab--anchor black">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="about-me__info--container">
        <figure className="about-me__picture--mask">
          <img
            src={profilepic}
            className="about-me__picture"
            alt="Picture of Me!"
          />
        </figure>
        <h1 className="about-me__info--title" style={{marginBottom:0}}>
          <span className="">{currentUser.name}</span>&nbsp;
        </h1>
        <div className="profile-table" style={{marginTop: 0, paddingTop: 0, height: 10}}>
          <table style={{marginTop: 20, marginBottom: 20}}>
            <tr>
              <td>
                <h3>Number of hours spent on events this week</h3>
                {/* Add data for this section */}
              </td>
              <td>
                <h3>My total events attended</h3>
                {/* Add data for this section */}
              </td>
            </tr>
            <tr>
              <td>
                <h3> {currentUser?.attendingThisWeek}</h3>
              </td>
              <td>
                <h3>{currentUser?.eventsAttending}</h3>
              </td>
            </tr>
          </table>
          <div style={{marginTop: 8}}>
            <h1 className="header__title">My upcoming events:</h1>
          </div>
          <div className="events__profile">
            <div className="events__profile">
              {currentUser.events &&
                currentUser.events.map((item) => (
                  <div key={item.id} className="cardnew">
                    <h1 className="h1_new">Event Name: {item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
