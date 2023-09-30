import React, { useState, useEffect } from 'react';
import OrganizationCard from './OrganizationCard';

const dummyData = [
    { id: 1, name: "Organization 1", description: "Description for Organization 1" },
    { id: 2, name: "Organization 2", description: "Description for Organization 2" },
    { id: 3, name: "Organization 3", description: "Description for Organization 3" },
];

function EventCards() {
    const [organizations, setOrganizations] = useState(dummyData);

    // You can uncomment this when ready to fetch real data
    /*
    useEffect(() => {
        fetch('/organizations')
            .then(response => response.json())
            .then(data => setOrganizations(data))
            .catch(error => console.error("Error fetching organizations:", error));
    }, []); 
    */

    return (
        <div className="org-container">
            {organizations.map(org => (
                <OrganizationCard key={org.id} name={org.name} description={org.description} />
            ))}
        </div>
    );
}

export default EventCards;
