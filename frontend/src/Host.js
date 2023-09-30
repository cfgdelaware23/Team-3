import React from 'react';
import logo from './logo.png'
import './Host.css'


const Card = () => {
    return (
      <div className="card">
        <img src="https://example.com/card-image.jpg" alt="Card Image" />
        <div className="card-body">
          <h2 className="card-title">Event</h2>
          <p className="card-text">Description of Event</p>
          <div className="card-buttons">
            <button className="btn">View</button>
            <button className="btn">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

const Host = () => {
    return (
        <>
        <div className="navbar">
            <img src={logo} alt="ACB Logo" className="logo" />
            <div className="right__side">
                  <section class="section">
                 <button class="add">Add Event</button>

             </section>

            
            <h2 className='user__name'>John Doe</h2>    
            
            </div>


        </div>
        <div>
            

           

             <section class="section">
                 <h1> My Upcoming Events</h1>



             </section>

             <section class="section">

                 <div className="card-container">
                <Card />

                <Card />
                <Card />
                
                </div>
            </section>


             <section class="section">

                 <h1> Other Events</h1>
             </section>
                 <section class="section">
                 <Card />

                 <Card />
                 <Card />
                 </section>
     

             <footer className="footer">
                 <p className="text-footer">
                     JP Morgan Code for Good
                 </p>
             </footer>


         </div>
        </>
        



    );
}


export default Host;