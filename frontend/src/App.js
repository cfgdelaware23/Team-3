import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Login from './components/Login';

function App() {
  return (
   <>
   <Login/>
   </>
  );
=======
import Navbar from './Navbar';
import OrganizationCard from './OrganizationCard';
import Footer from './Footer';
import Volunteers from './components/Volunteers/Volunteers';


const dummyData = [
    { id: 1, name: "Organization 1", description: "Description for Organization 1" },
    { id: 2, name: "Organization 2", description: "Description for Organization 2" },
    { id: 3, name: "Organization 3", description: "Description for Organization 3" },
    // { id: 4, name}

];


function App() {
    
    const [organizations, setOrganizations] = useState(dummyData);

    // NOTE: TRY FOR REAL DATA MAYBE???? DOUBLECHECK IF RIGHT
    /*
    useEffect(() => {
        fetch('/organizations')
            .then(response => response.json())
            .then(data => setOrganizations(data))
            .catch(error => console.error("Error fetching organizations:", error));
    }, []); 
    */
    return (
      <>
        <div className="App">
            <Navbar />
            <div className="org-container">
                {organizations.map(org => (
                    <OrganizationCard key={org.id} name={org.name} description={org.description} />
                ))}
            </div>
            
        </div>
        <Footer />
        </>
    );
>>>>>>> 8c725af42e630f9a3e723d6a10fe47d00218550c
}

export default App;
