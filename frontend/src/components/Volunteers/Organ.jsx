import React from "react";

function Organ({ name, description }) {
  console.log("name : ", name);
  return (
    <div className="org-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <li className="nav__contact--new">
        <a href="#" className="nav__contact--textnew">
          Attend Event
        </a>
      </li>
    </div>
  );
}

export default Organ;
