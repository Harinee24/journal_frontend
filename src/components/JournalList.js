import React from "react";
import JournalItem from "./JournalItem"; // Ensure JournalItem is imported

const JournalList = ({ journals, onDeleteJournal }) => {
  return (
    <div>
      <h2>All Journals</h2>
      {journals.length > 0 ? (
        journals.map((journal) => (
          <JournalItem
            key={journal.id}
            journal={journal}
            onDeleteJournal={onDeleteJournal}
          />
        ))
      ) : (
        <p>No journals available.</p>
      )}
    </div>
  );
};

export default JournalList; // Ensure this is exported
