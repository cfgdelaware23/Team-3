import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import OrganizationCard from './OrganizationCard';
import Footer from './Footer';
import EventCards from './EventCards';
import Volunteers from './components/Volunteers/Volunteers';




function App() {
    return (
      <>
      <div className="App">
          <Navbar />
          <EventCards/>
      </div>
      <Footer />
  </>
    );
}

export default App;
