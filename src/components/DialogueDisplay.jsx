// src/components/DialogueDisplay.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const DialogueDisplay = () => {
  const { dialogues, currentDialogueIndex } = useAppContext();
  const dialogue = dialogues[currentDialogueIndex];

  return (
    <div className="mt-4">
      <p><strong>Original Text:</strong> {dialogue.original}</p>
      <textarea
        className="w-full p-2 border rounded mt-2"
        placeholder="Translated Text"
        value={dialogue.translated}
        readOnly
      />
    </div>
  );
};

export default DialogueDisplay;
