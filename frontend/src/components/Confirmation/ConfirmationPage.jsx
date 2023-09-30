import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

function ConfirmationPage() {
  const [pageData, setPageData] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log("confirmpage: ", id);
  const fetchEvent = async () => {
    const res = await fetch(`http://localhost:3001/events/${id}`);
    const data = await res.json();
    setPageData(data.result);
    console.log("data on page:", data.result);
  };

  if (pageData === null) {
    fetchEvent();
  }

  if (pageData) {
    return (
      <div>
        <h1>Event Title:{pageData.title}</h1>
        Do you want you attend this event? blah blah blah
      </div>
    );
  }

  return <>Loading....</>;
}

export default ConfirmationPage;
