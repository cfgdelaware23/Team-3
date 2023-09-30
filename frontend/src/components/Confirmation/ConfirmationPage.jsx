import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

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
    localStorage.setItem("currentUser", JSON.stringify(data));
    console.log(localStorage.getItem("currentUser"));
  };

  const addToEventsList = async () => {
    const eventData = {
      pageData,
      user,
    };
    console.log("adding from client. data:", eventData);

    const res = await fetch("http://localhost:3001/users/add-event", {
      method: "POST", // HTTP request method
      headers: {
        "Content-Type": "application/json",
      }, // Headers for the request
      body: JSON.stringify(eventData), // Convert the data to a JSON string
    });

    fetchUpdatedUser();
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <>
      {pageData ? (
        <div>
          <h1>Event Title:{pageData.title}</h1>
          <h1>Description: {pageData.description}</h1>
          <h1>Categories: {pageData.categories}</h1>
          <h1>Date: {pageData.date}</h1>
          Do you want you attend this event? blah blah blah
          <div>
            <buton
              onClick={() => {
                addToEventsList();
                alert("Added Succesfully, click OK to redirect");
                navigate("/");
              }}
            >
              Yes
            </buton>
            <buton
              onClick={() => {
                alert("Canceled, click Ok to redirect");

                navigate("/");
              }}
            >
              No
            </buton>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
}

export default ConfirmationPage;
