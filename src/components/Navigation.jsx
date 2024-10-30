// src/components/Navigation.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Navigation = () => {
  const { dialogues, currentDialogueIndex, setCurrentDialogueIndex } = useAppContext();

  const handleNext = () => {
    if (currentDialogueIndex < dialogues.length - 1) setCurrentDialogueIndex(currentDialogueIndex + 1);
  };

  const handlePrevious = () => {
    if (currentDialogueIndex > 0) setCurrentDialogueIndex(currentDialogueIndex - 1);
  };

  return (
    <div className="mt-4 flex justify-between">
      <button onClick={handlePrevious} disabled={currentDialogueIndex === 0} className="p-2 bg-gray-500 text-white rounded">
        Previous
      </button>
      <button onClick={handleNext} disabled={currentDialogueIndex === dialogues.length - 1} className="p-2 bg-gray-500 text-white rounded">
        Next
      </button>
    </div>
  );
};

export default Navigation;
