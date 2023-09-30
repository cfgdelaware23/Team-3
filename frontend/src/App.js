import React, { Profiler } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import Volunteers from "./components/Volunteers/Volunteers";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginForm from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ConfirmationPage from "./components/Confirmation/ConfirmationPage";
import Profile from "./components/Profile/Profile";
import HoursTable from "./components/Admin/Hours";
import Nav from "./components/Volunteers/Nav";
function App() {
  return (
    <>
      <SkipLink />
      <Nav />

      <Routes>
        <Route path="/" element={<Volunteers />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/confirm-page/:id" element={<ConfirmationPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/admin" element={<HoursTable />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
