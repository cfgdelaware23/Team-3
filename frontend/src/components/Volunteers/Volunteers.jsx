import React, { useState, useEffect } from 'react';
import './Volunteers.css';
import Organ from './Organ';
import Nav from './Nav';

const Volunteers = () => {
     
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/events')
            .then(response => response.json())
            .then(data => setOrganizations(data?.result))
            .catch(error => console.error("Error fetching organizations:", error));
    }, []); 

    return (
        <div className="App">
            <Nav />
            <div className="org-container">
                {organizations.map(org => (
                    <Organ key={org.id} name={org.title} description={org.description} />
                ))}
            </div>
        </div>
    );
}

export default Volunteers;