// src/components/VideoPlayer.jsx
import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} controls width="100%">
        <source src="/sample-video.mp4" type="video/mp4" />
      </video>
      <button onClick={togglePlayPause} className="p-2 bg-blue-500 text-white mt-2 rounded">
        Play/Pause
      </button>
    </div>
  );
};

export default VideoPlayer;
