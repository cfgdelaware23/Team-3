import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Login/Login";
import SignUp from "../SignUp/SignUp";

function Organ({ org }) {
  // const [loggedIn, setLoggedIn] = useState(false);
  console.log(JSON.parse(localStorage.getItem("currentUser")));

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("currentUser"))) {

  //   }
  // });

  return (
    <div className="org-card">
      <h3>{org.title}</h3>
      <h3>{org.description}</h3>
      <p>{org.catagories}</p>
      <p>{org.owner}</p>

      <li className="nav__contact--new">
        <Link
          className="nav__contact"
          to={
            JSON.parse(localStorage.getItem("currentUser")) === null
              ? "/sign-up"
              : "/"
          }
        >
          Attend Event
        </Link>
        {/* <a href="#" className="nav__contact--textnew">
          Attend Event
        </a> */}
      </li>
    </div>
  );
}

export default Organ;
