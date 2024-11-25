import React, { useState } from "react";

const JournalForm = ({ onAddJournal }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      alert("Content cannot be empty");
      return;
    }
    onAddJournal(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <button type="submit" style={{ backgroundColor: "#007BFF", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
        Add Journal
      </button>
    </form>
  );
};

export default JournalForm;
