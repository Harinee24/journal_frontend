import React, { useState, useEffect } from "react";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";
import { getJournals, createJournal, deleteJournal } from "./services/journalService";

const App = () => {
  const [journals, setJournals] = useState([]);

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Journal App</h1>
      <JournalForm onAddJournal={handleAddJournal} />
      <JournalList journals={journals} onDeleteJournal={handleDeleteJournal} />
    </div>
  );
};

export default App;
