// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const dialogues = [
    { id: 1, original: 'Hello World', translated: '' },
    { id: 2, original: 'Welcome to the app', translated: '' },
    { id: 3, original: 'Enjoy your stay', translated: '' },
  ];
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  return (
    <AppContext.Provider value={{ dialogues, currentDialogueIndex, setCurrentDialogueIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
