import React, { useState, useEffect } from "react";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";
import { getJournals, createJournal, deleteJournal, updateJournal } from "./services/journalService";

const App = () => {
  const [journals, setJournals] = useState([]);
  const [editJournal, setEditJournal] = useState(null);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      const data = await getJournals();
      setJournals(data);
    } catch (error) {
      console.error("Error fetching journals:", error);
    }
  };

  const handleAddJournal = async (content) => {
    try {
      const newJournal = await createJournal(content);
      setJournals([...journals, newJournal]);
    } catch (error) {
      console.error("Error adding journal:", error);
    }
  };

  const handleDeleteJournal = async (id) => {
    try {
      await deleteJournal(id);
      setJournals(journals.filter((journal) => journal.id !== id));
    } catch (error) {
      console.error("Error deleting journal:", error);
    }
  };

  const handleEditJournal = async (id, content) => {
    try {
      const updatedJournal = await updateJournal(id, content);
      setJournals(
        journals.map((journal) =>
          journal.id === id ? { ...journal, content: updatedJournal.content } : journal
        )
      );
      setEditJournal(null); // Reset the form to add a new journal after editing
    } catch (error) {
      console.error("Error updating journal:", error);
    }
  };

  const handleEditClick = (journal) => {
    setEditJournal(journal);
  };

  return (
    <div style={{ padding: "5px" }}>
      
      {/* Journal Application */}
      <JournalForm
        onAddJournal={handleAddJournal}
        onEditJournal={handleEditJournal}
        editJournal={editJournal}
      />
      <JournalList
        journals={journals}
        onDeleteJournal={handleDeleteJournal}
        onEditJournal={handleEditClick}
      />
    </div>
  );
};

export default App;
