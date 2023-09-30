import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import './ConfirmationPage.css';

function ConfirmationPage() {
  const [pageData, setPageData] = useState(null);
  const [updatedUser, setUpdatedUSer] = useState(null);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const { id } = useParams();

  console.log("confirmpage: ", id);

  const fetchEvent = async () => {
    console.log("running?");
    const res = await fetch(`http://localhost:3001/events/${id}`);
    const data = await res.json();
    setPageData(data.result);
    console.log("data on page:", data.result);
  };

  const fetchUpdatedUser = async () => {
    const id = user._id;
    const res = await fetch(`http://localhost:3001/users/${id}`);
    const data = await res.json();

    console.log("UPDATED USER via con: ", data);

    localStorage.clear();
    localStorage.setItem("currentUser", JSON.stringify(data.user));
    console.log(localStorage.getItem("currentUser"));
  };

  const addToEventsList = async () => {
    const eventData = {
      pageData,
      user,
    };
    console.log("adding from client. data:", eventData);

    const res = await fetch("http://localhost:3001/users/add-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    fetchUpdatedUser();
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div className="container">
      {pageData ? (
        <>
          <h1 className="title">Event Title: {pageData.title}</h1>
          <p className="description">Description: {pageData.description}</p>
          <p className="category">Category: {pageData.categories}</p>
          <p className="date">Date: {pageData.date}</p>
          <p className="question">Do you want to attend this event?</p>
          <div className="buttons">
            <button
              className="yes"
              onClick={() => {
                addToEventsList();
                alert("Added Succesfully, click OK to redirect");
                navigate("/");
              }}
            >
              Yes
            </button>
            <button
              className="no"
              onClick={() => {
                alert("Canceled, click Ok to redirect");

                navigate("/");
              }}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default ConfirmationPage;
