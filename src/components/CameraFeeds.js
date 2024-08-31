import React, { useState } from 'react';
import './CameraFeeds.css';

function CameraFeeds() {
  const [videos, setVideos] = useState([null, null, null, null]);

  const handleVideoUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      const updatedVideos = [...videos];
      updatedVideos[index] = videoUrl;
      setVideos(updatedVideos);
    }
  };

  return (
    <div>
    <center><h2>Camera Feeds</h2></center>
        <div className="camera-feeds">
        {videos.map((video, index) => (
            <div key={index} className="feed">
            <h3>Route {index + 1}</h3>
            {video ? (
                <video controls src={video} autoPlay loop muted />
            ) : (
                <div className="upload-container">
                <label htmlFor={`upload-${index}`} className="upload-label">
                    Upload Video
                </label>
                <input
                    type="file"
                    id={`upload-${index}`}
                    accept="video/*"
                    onChange={(event) => handleVideoUpload(index, event)}
                />
                </div>
            )}
            </div>
        ))}
        </div>
    </div>
  );
}

export default CameraFeeds;
