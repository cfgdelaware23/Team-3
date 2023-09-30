import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return (
    <>
      <div className="App">
      <SkipLink />
        {/* <Navbar /> */}
        <Volunteers />
      </div>
      <Footer />
    </>
  );
}

export default App;
