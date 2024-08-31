import React from 'react';
import './CameraFeeds.css';

function CameraFeeds() {
  const videoFiles = [
    '/videos/clip 1.mp4',
    '/videos/clip 2.mp4',
    '/videos/clip 3.mp4',
    '/videos/clip 4.mp4',
  ];

  return (
    <div>
      <h2>Camera Feeds</h2>
      <div className="camera-feeds">
        {videoFiles.map((videoSrc, index) => (
          <div key={index} className="feed">
            <h3>Route {index + 1}</h3>
            <video 
              autoPlay 
              muted 
              loop 
              src={videoSrc} 
              className="video-player"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CameraFeeds;
