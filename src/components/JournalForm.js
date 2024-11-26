import React, { useState, useEffect } from "react";

const JournalForm = ({ onAddJournal, onEditJournal, editJournal }) => {
  const [content, setContent] = useState(editJournal ? editJournal.content : "");
  const [isFocused, setIsFocused] = useState(false);

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
        <label style={{ textAlign: "center", border: "none" }}>
          <strong style={{ fontSize: "20px" }}>Content:</strong>
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)} 
          rows="9"
          style={{
            width: "100%",
            marginTop: "20px",
            marginBottom: "10px",
            border: "2px solid #53E2FF", // Keep the border style consistent
            borderRadius: "10px",
            outline: "none", // Prevent default outline on focus
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          background: "#53E2FF",
          color: "black",
          padding: "10px",
          paddingBottom: "10px",
          marginBottom: "20px",
          border: "2px solid #53E2FF", // Same border for the button
          cursor: "pointer",
          fontSize: "17px",
          borderRadius: "15px",
          outline: "none" // Remove outline for button focus
        }}
      >
        <strong>{editJournal ? "Update Journal" : "Add Journal"}</strong>
      </button>
    </form>
  );
};

export default JournalForm;
