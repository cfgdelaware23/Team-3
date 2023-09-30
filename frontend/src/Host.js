import React from 'react';
import logo from './logo.png'
import './Host.css'

const Host = () => {
    return (
        <>
        <div className="navbar">
            <img src={logo} alt="ACB Logo" className="logo" />
            <div className="right__side">
            <h2 className='user__name'>John Doe</h2>    
            
            </div>


        </div>
        <div>
            

             <section class="section">
                 <button class="add">Add Event</button>

             </section>

             <section class="section">
                 <h1> My Upcoming Events</h1>

             </section>

            
             <section class="section">
                
                 <button class="view">View</button>

                 <button class="view">Cancel</button>
            </section>

             <section class="section">

                 <h1> Other Events</h1>
                
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

//  function Host() {
//      return (
//          <div>
//             <div class="navbar background">
//                 <ul class="navbar-tabs">
//                      <div class="logo" >
//                      <img src="./logo.png" alt="Logo" class="logo"></img>
//                      </div>

                    
        
//                  </ul>
//                  <div class="rightbar">
//                      <button class="username">Username</button>
//                  </div>
//              </div>

//              <section class="section">
//                  <button class="add">Add Event</button>

//              </section>

//              <section class="section">
//                  <h1> My Upcoming Events</h1>

//              </section>

            
//              <section class="section">
//                  <button class="view">View</button>

//                  <button class="view">Cancel</button>
//             </section>

//              <section class="section">

//                  <h1> Other Events</h1>
                
//            </section>

//              <footer className="footer">
//                  <p className="text-footer">
//                      JP Morgan Code for Good
//                  </p>
//              </footer>


//          </div>
//      )
//  } 

export default Host;