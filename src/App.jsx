// src/App.jsx
import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import AudioRecorder from './components/AudioRecorder';
import DialogueDisplay from './components/DialogueDisplay';
import Navigation from './components/Navigation';
import { AppProvider } from './context/AppContext';

const App = () => (
  <AppProvider>
    <div className="container mx-auto p-4">
      <VideoPlayer />
      <AudioRecorder />
      <DialogueDisplay />
      <Navigation />
    </div>
  </AppProvider>
);

export default App;
