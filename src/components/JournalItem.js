import React from "react";
import { format } from "date-fns";

const JournalItem = ({ journal, onDeleteJournal, onEditJournal }) => {
  const formattedDate = format(new Date(journal.createdAt), "PPpp");

  return (
    <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px", background: "#dffefd" }}>
      <p style={{ background: "#dffefd" }}>{journal.content}</p>
      <small style={{ background: "#dffefd" }}>Created At: {formattedDate}</small>
      <button
        style={{
          background: "#4CAF50",
          color: "white",
          padding: "5px 10px",
          marginLeft: "10px",
          border: "none",
          cursor: "pointer",
          fontSize: "15px",
        }}
        onClick={() => onEditJournal(journal)}
      >
        Edit
      </button>
      <button
        style={{
          background: "#fe6a4a",
          color: "white",
          padding: "5px 10px",
          marginLeft: "10px",
          border: "none",
          cursor: "pointer",
          fontSize: "15px",
        }}
        onClick={() => onDeleteJournal(journal.id)}
      >
        Delete
      </button>
      
    </div>
  );
};


export default JournalItem; // Ensure this is exported
