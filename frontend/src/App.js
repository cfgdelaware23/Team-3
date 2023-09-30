import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import Volunteers from "./components/Volunteers/Volunteers";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginForm from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ConfirmationPage from "./components/Confirmation/ConfirmationPage";
function App() {
  return (
    <>
    <SkipLink/>
    <Routes>
      <Route path="/" element={<Volunteers />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/confirm-page/:id" element={<ConfirmationPage />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
