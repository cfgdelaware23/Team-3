import React, { useState } from "react";
import { useNavigate, useHistory } from "react-router";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hours, setHours] = useState("");
  const [eventsAttending, setEventsAttending] = useState("");
  const [upcomingEvents, setUpcomingEvents] = useState("");
  const [attendingThisWeek, setAttendingThisWeek] = useState("");
  const navigate = useNavigate();

  const userData = {
    email,
    password,
    hours,
    eventsAttending,
    attendingThisWeek,
    upcomingEvents,
    events: [{}],
  };

  // method: 'POST',          // HTTP request method
  // headers,                 // Headers for the request
  // body: JSON.stringify(data), // Convert the data to a JSON string

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Fill out entire form");
    }
    const res = await fetch("http://localhost:3001/users/createUser", {
      method: "POST", // HTTP request method
      headers: {
        "Content-Type": "application/json",
      }, // Headers for the request
      body: JSON.stringify(userData), // Convert the data to a JSON string
    });
    const data = await res.json();
    console.log(data);
    // localStorage.setItem("currentUser", JSON.stringify(data.findByEmail));
    // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("Current data from signin: ", data);
    navigate("/login");

    // You can perform further actions here, like sending the data to a server.
  };

  return (
    <div>
      <h1>Sign up Form</h1>
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
          <label>hours</label>

          <input
            type="input"
            name="events attending"
            value={hours}
            onChange={(e) => {
              setHours(e.target.value);
              console.log(hours);
            }}
            required
          />
          <label>events attending</label>

          <input
            type="input"
            name="events attending"
            value={eventsAttending}
            onChange={(e) => {
              setEventsAttending(e.target.value);
              console.log(eventsAttending);
            }}
            required
          />
          <label>attending this week</label>
          <input
            type="input"
            name="attending"
            value={attendingThisWeek}
            onChange={(e) => {
              setAttendingThisWeek(e.target.value);
              console.log(attendingThisWeek);
            }}
            required
          />
          <label>upcoming events</label>
          <input
            type="input"
            name="upcoming"
            value={upcomingEvents}
            onChange={(e) => {
              setUpcomingEvents(e.target.value);
              console.log(upcomingEvents);
            }}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
