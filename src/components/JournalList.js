import React from 'react';
import JournalItem from './JournalItem'; // Import JournalItem component

const JournalList = ({ journals, onDeleteJournal, onEditJournal }) => {
  return (
    <div>
      {journals.length > 0 ? (
        journals.map((journal) => (
          <JournalItem
            key={journal.id}
            journal={journal}
            onDeleteJournal={onDeleteJournal}
            onEditJournal={onEditJournal} // Ensure onEditJournal is passed here
          />
        ))
      ) : (
        <p>No journals available.</p>
      )}
    </div>
  );
};

export default JournalList;
