import React from 'react';


function Organ({ name, description }) {
    return (
        <div className="org-card">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Organ;