import React from 'react';
import './volunteer.css';

function Volunteer() {
    return (
        <div>
            <div class="navbar background">
                <ul class="navbar-tabs">
                    <div class="logo" >
                    <img src="./logo.png" alt="Logo" class="logo"></img>
                    </div>

                    
        
                </ul>

                <div class="rightbar">
                    <button class="username">Username</button>
                </div>
            </div>

            <section class="section">
                <button class="add">Add Event</button>

                <h1> My Upcoming Events</h1>

                <button class="view">View</button>

                <button class="view">Cancel</button>

                <h1> Other Events</h1>
                
            </section>

            
        </div>
    )
} 

export default Volunteer;