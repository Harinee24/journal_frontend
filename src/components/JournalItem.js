import React from "react";
import { format } from "date-fns";

const JournalItem = ({ journal, onDeleteJournal, onEditJournal }) => {
  const formattedDate = format(new Date(journal.createdAt), "PPpp");

  return (
    <div style={{ border: "2px solid #FB8ED3", borderRadius:"10px", padding: "10px", marginBottom: "10px", background: " white" }}>
      <p style={{ background: "white", fontSize: "17px" }}>{journal.content}</p>
      <small style={{ background: "white" }}>Created At: {formattedDate}</small>
      <button
        style={{
          background: "#FB8ED3",
          borderRadius:"10px",
          color: "black",
          padding: "5px 10px",
          marginLeft: "25px",
          border: "none",
          cursor: "pointer",
          fontSize: "17px",
        }}
        onClick={() => onEditJournal(journal)}
      >
        Edit
      </button>
      <button
        style={{
          background: "#F64545",
          color: "white",
          padding: "5px 10px",
          marginLeft: "20px",
          border: "none",
          borderRadius:"10px",
          cursor: "pointer",
          fontSize: "17px",
        }}
        onClick={() => onDeleteJournal(journal.id)}
      >
        Delete
      </button>
      
    </div>
  );
};


export default JournalItem; // Ensure this is exported
