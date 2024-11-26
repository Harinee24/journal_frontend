import React, { useState, useEffect } from "react";

const JournalForm = ({ onAddJournal, onEditJournal, editJournal }) => {
  const [content, setContent] = useState(editJournal ? editJournal.content : "");

  useEffect(() => {
    if (editJournal) {
      setContent(editJournal.content);
    }
  }, [editJournal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      alert("Content cannot be empty");
      return;
    }
    if (editJournal) {
      onEditJournal(editJournal.id, content); // Pass the journal ID and content to edit
    } else {
      onAddJournal(content); // Add new journal
    }
    setContent(""); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ textAlign: "center", border: "none", background: "rgb(199, 251, 255)" }}>
          <strong style={{ background: "rgb(199, 251, 255)", fontSize: "20px" }}>Content:</strong>
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          style={{ width: "100%", marginTop: "20px", marginBottom: "10px" }}
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: "rgb(146, 181, 250)", color: "black", padding: "10px", paddingBottom:"10px", marginBottom:"20px", border: "0.2px solid black", cursor: "pointer", fontSize: "17px" }}
      >
        <strong>{editJournal ? "Update Journal" : "Add Journal"}</strong>
      </button>
    </form>
  );
};

export default JournalForm;
