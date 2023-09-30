import React, { useState } from "react";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userData = {
    email,
    password,
  };

  // method: 'POST',          // HTTP request method
  // headers,                 // Headers for the request
  // body: JSON.stringify(data), // Convert the data to a JSON string

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Fill out entire form");
    }
    const res = await fetch("http://localhost:3001/users/signin", {
      method: "POST", // HTTP request method
      headers: {
        "Content-Type": "application/json",
      }, // Headers for the request
      body: JSON.stringify(userData), // Convert the data to a JSON string
    });
    const data = await res.json();
    console.log("data zz: ", data);
    console.log("before: ", data.findByEmail);
    localStorage.setItem("currentUser", JSON.stringify(data.findByEmail));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("Current user: ", currentUser);
    navigate("/");

    // You can perform further actions here, like sending the data to a server.
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
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
