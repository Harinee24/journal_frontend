import React from "react";

const JournalItem = ({ journal }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <p>{journal.content}</p>
      <small>Created At: {new Date(journal.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default JournalItem;
