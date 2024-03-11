import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import Header from './components/Header/Header';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import VideoThumbnails from './components/VideoThumbnail/VideoThumbnails';

function App() {
  // Removed currentVideo state and clickVideo function

  return (
    <div className='body-copy'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Pass videos as prop if needed */}
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/video/:id" element={<VideoDetailsPage />} />
        </Routes>
        {/* Adjusted the layout to remove direct reference to CurrentVideo */}
      </Router>
    </div>
  );
}

export default App;