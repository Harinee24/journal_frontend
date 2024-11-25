import React from "react";
import JournalItem from "./JournalItem";

const JournalList = ({ journals }) => {
  return (
    <div>
      <h2>All Journals</h2>
      {journals.length > 0 ? (
        journals.map((journal) => (
          <JournalItem key={journal.id} journal={journal} />
        ))
      ) : (
        <p>No journals available.</p>
      )}
    </div>
  );
};

export default JournalList;
