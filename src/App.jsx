import { useState } from 'react';
import reactLogo from './assets/react.svg'; // Assuming these logos are used somewhere else
import viteLogo from '/vite.svg';
import './App.scss';
import Header from './components/Header/Header';
import VideoThumbnails from './components/VideoThumbnail/VideoThumbnails';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import CurrentVideo from './components/CurrentVideo/CurrentVideo'
function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]); // Default to the first video

  const clickVideo = (id) => {
    const newCurrentVideo = videoDetails.find(videoDetail => videoDetail.id === id);
    setCurrentVideo(newCurrentVideo);
    console.log(newCurrentVideo);
  };

  return (
    <div className='body-copy'>
      <Header />
      <CurrentVideo currentVideo={currentVideo} />

      
      

      <div className="video-thumbnails">
      
      {videos.filter(video => video.id !== currentVideo.id).map((video) => (
          
          <div key={video.id} onClick={() => clickVideo(video.id)}>
            <VideoThumbnails 
            
              image={video.image} 
              title={video.title}
            />
          </div>

        ))};
      </div>
    </div>
  );
}

export default App;
