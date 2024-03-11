import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo'

const VideoDetailsPage = () => {
    const { id } = useParams(); // Use useParams to get the video ID from the route

    return (
        <div>
            <h2>Video Details</h2>
            
            {/* Pass the id to CurrentVideo */}
            <CurrentVideo videoId={id} />
        </div>
    );
};

export default VideoDetailsPage;
