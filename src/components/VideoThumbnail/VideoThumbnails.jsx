import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VideoThumbnails = ({ currentVideoId }) => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace 'API_ENDPOINT' with the actual endpoint for your videos list
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=204014cc-ba86-4e0f-b7f1-b7342bfe76aa');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
        // Handle error appropriately
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-thumbnails">
      {videos.filter(video => video.id !== currentVideoId).map(video => (
        <div key={video.id} onClick={() => navigate(`/video/${video.id}`)} className="video-thumbnail">
          <img src={video.image} alt={`Thumbnail for ${video.title}`} className="video-thumbnail-image" />
          <h3 className="video-thumbnail-title">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoThumbnails;
