// src/components/AudioRecorder.jsx
import React, { useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioRecorder = () => {
  const [waveform, setWaveform] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => {
    const wave = WaveSurfer.create({
      container: "#waveform",
      waveColor: "violet",
      progressColor: "purple",
    });
    setWaveform(wave);

    return () => wave.destroy();
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.ondataavailable = (e) => {
      const audioURL = URL.createObjectURL(e.data);
      waveform.load(audioURL);
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording} className="mt-2">
        {isRecording ? "Stop" : "Record"}
      </button>
      <div id="waveform" className="mt-2" />
    </div>
  );
};

export default AudioRecorder;
