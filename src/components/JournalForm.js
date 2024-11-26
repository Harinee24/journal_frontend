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
        <label style={{textAlign:"center", border:"none", background:"rgb(199, 251, 255)"}}><strong style={{background:"rgb(199, 251, 255)", fontSize:"20px"}}>Content:</strong></label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          style={{ width: "100%", marginTop: "20px", marginBottom: "10px"  }}
        />
      </div>
      <button type="submit" style={{ backgroundColor: "rgb(146, 181, 250)", color: "black", padding: "10px", border: "0.2px solid black", cursor: "pointer", fontSize:"17px" }}>
        <strong>Add Journal</strong>
      </button>
    </form>
  );
};

export default JournalForm;
