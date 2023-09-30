import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Login/Login";
import SignUp from "../SignUp/SignUp";

function Organ({ org }) {
  // const [loggedIn, setLoggedIn] = useState(false);
  console.log(JSON.parse(localStorage.getItem("currentUser")));
  console.log(org)
  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("currentUser"))) {

  //   }
  // });

  return (
    <div className="org-card">
      <h3>Title: {org.title}</h3>
      <h3>Description: {org.description}</h3>
      <div class="event-card-list">
      <div className="category-container">
      { org.categories.length > 0 && (
        org.categories.map((category) => 
          <div className="category-pill">{category}</div>
        )
      )}
      </div>
      <p>Owner: {org.owner}</p>

      <li className="nav__contact--new">
        <Link
          className="nav__contact main-button-for-events"
          to={
            JSON.parse(localStorage.getItem("currentUser")) === null
              ? "/sign-up"
              : `/confirm-page/${org._id}`
          }
        >
          Attend Event
        </Link>
        {/* <a href="#" className="nav__contact--textnew">
          Attend Event
        </a> */}
      </li>
      </div>
    </div>
  );
}

export default Organ;