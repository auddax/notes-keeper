import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

// eslint-disable-next-line react/prop-types
function DataProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{
      notes,
      setNotes,
      archiveNotes,
      setArchiveNotes,
      deletedNotes,
      setDeletedNotes,
    }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
