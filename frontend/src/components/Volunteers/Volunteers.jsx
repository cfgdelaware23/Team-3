import React, { useState, useEffect } from 'react';
import './Volunteers.css';
import Organ from './Organ';
import Nav from './Nav';



const dummyData = [
    { id: 1, name: "Organization 1", description: "Description for Organization 1" },
    { id: 2, name: "Organization 2", description: "Description for Organization 2" },
    { id: 3, name: "Organization 3", description: "Description for Organization 3" },
    // { id: 4, name}

];

const Volunteers = () => {
     
    const [organizations, setOrganizations] = useState(dummyData);

    // NOTE: TRY FOR REAL DATA MAYBE???? DOUBLECHECK IF THIS IS RIGHT
    /*
    useEffect(() => {
        fetch('/organizations')
            .then(response => response.json())
            .then(data => setOrganizations(data))
            .catch(error => console.error("Error fetching organizations:", error));
    }, []); 
    */

    return (
        <div className="App">
            <Nav />
            <div className="org-container">
                {organizations.map(org => (
                    <Organ key={org.id} name={org.name} description={org.description} />
                ))}
            </div>
        </div>
    );
}

export default Volunteers;