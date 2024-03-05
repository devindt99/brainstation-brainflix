import React from 'react';
import VideoThumbnails from '../../components/VideoThumbnail/VideoThumbnails'; // Adjust the path as necessary
import videos from '../../data/videos.json'; // Adjust the path as necessary
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import CommentForm from '../../components/CommentForm/CommentForm';

const HomePage = () => {
  // Assuming you want to show all videos on the HomePage and there's no "currentVideo" to exclude
  const defaultVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8';
  return (
    <div>
      <h1>Home Page</h1>
      <CurrentVideo videoId={defaultVideoId}/>
      <CommentForm videoId={defaultVideoId}/>
      <VideoThumbnails videos={videos} currentVideoId={defaultVideoId}/>
    </div>
  );
};

export default HomePage;
