import React, { useState, useEffect } from "react";
import "./Volunteers.css";
import Organ from "./Organ";
import Nav from "./Nav";

const Volunteers = () => {
  const [organizations, setOrganizations] = useState(null);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/events");
    const data = await res.json();
    setOrganizations(data.result);
    console.log(organizations);
  };

  if (organizations === null) {
    fetchData();
  }
  console.log(organizations);
  return (
    <div className="App">
      <Nav />
      <div className="org-container">
        {organizations &&
          organizations.map((org) => (
            <Organ key={org.title} name={org.title} org={org} />
          ))}
      </div>
    </div>
  );
};

export default Volunteers;
