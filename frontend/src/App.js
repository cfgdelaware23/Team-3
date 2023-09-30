import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <Volunteers />
      </div>
      <Footer />
    </>
  );
}

export default App;
