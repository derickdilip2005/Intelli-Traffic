import React, { useState } from 'react';
import './CameraFeeds.css';

function CameraFeeds() {
  const videoFiles = [
    '/videos/clip1.mp4',
    '/videos/clip2.mp4',
    '/videos/clip3.mp4',
    '/videos/clip4.mp4',
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo('');
  };

  return (
    <div>
      <center><h2>Camera Feeds</h2></center>
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
            <button onClick={() => openModal(videoSrc)} className="maximize-button">Maximize</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <video 
              autoPlay 
              loop 
              src={currentVideo} 
              className="modal-video-player"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CameraFeeds;
