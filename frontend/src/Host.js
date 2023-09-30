import React from 'react';
import logo from './logo.png'
import './Host.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Card = ({title, description}) => {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          <div className="card-buttons">
            <button className="btn">View</button>
            <button className="btn">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  let themeButton = document.getElementById("theme-button");

const DarkMode = () => {
  document.body.classList.toggle("dark-mode");
}


function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com/acbnational" aria-label="Facebook">
             <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/acbnational" aria-label="Twitter">
                 <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com/channel/UCI_nLwS9Cw2Bm1IA4qIBw3Q" aria-label="Youtube">
                 <FontAwesomeIcon icon={faYoutube} />
            </a>
        </footer>
    );
}
const Host = () => {
    return (
        <>
        <div>

        <section class="section">

        <div className="card">
        <div className="words">
          <h3>constrast options:</h3>
       </div>
       <button id="theme-button">Dark Mode</button> 
       
       {/* <h3>Text Size:</h3> */}
 
        
      </div>
      <Link className="nav__contact" style={{marginRight: 40}} to="/admin">
                  Manage Table
                </Link>
        </section>   

           

             <section class="section-title">
                 <h1> My Upcoming Events</h1>



             </section>

             <section class="section">

                 <div className="card-container">
                <Card title={"Gardening Club"} description={"Join the gardening club!"}/>
                <Card title={"Open Talk"} description={"Join an open conversation"}/>
                <Card title={"IPhone Tips"} description={"Learn more about your iphone"}/>                
                </div>
            </section>


             <section class="section-title">

                 <h1> Other Events</h1>
             </section>
            
             <section class="section">

                <div className="card-container">
                <Card title={"Knitting"} description={"Join the knitting club!"}/>
                <Card title={"Open Talk 2"} description={"Join an open conversation"}/>
                <Card title={"Finance"} description={"Learn about how to manage money"}/>  
                </div>
            </section>

            <section class="section">

            </section>
     

             <Footer />


         </div>
        </>
        



    );
}


export default Host;