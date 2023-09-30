// Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userData = {
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Fill out entire form");
    }
    const res = await fetch("http://localhost:3001/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data.findByEmail);
    localStorage.setItem("currentUser", JSON.stringify(data.findByEmail));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("Current user: ", currentUser);
    navigate("/");
  };

  return (
    <div className="login__container">
      <h1>Login Form</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
