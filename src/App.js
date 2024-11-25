import React, { useState, useEffect } from "react";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";
import { getJournals, createJournal } from "./services/journalService";

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Journal App</h1>
      <JournalForm onAddJournal={handleAddJournal} />
      <JournalList journals={journals} />
    </div>
  );
};

export default App;
