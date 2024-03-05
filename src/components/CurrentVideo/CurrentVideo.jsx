import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios

const CurrentVideo = () => {
    let { id } = useParams(); // This ID corresponds to the `/video/:id` route parameter
    const [currentVideo, setCurrentVideo] = useState(null);
    if (!id) {id = '84e96018-4022-434e-80bf-000ce4cd12b8'};
    console.log('Video ID:', id);
    
    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                // Replace YOUR_API_ENDPOINT with the actual endpoint where video details can be fetched
                // and ensure your API key is correctly appended as a query parameter if required by your API
                const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=204014cc-ba86-4e0f-b7f1-b7342bfe76aa`);
                setCurrentVideo(response.data);
            } catch (error) {
                console.error("Error fetching video details:", error);
                // Handle error scenario, maybe set an error state to show an error message
            }
        };

        fetchVideoDetails();
    }, [id]); // Re-run this effect if the ID changes

    // If currentVideo hasn't been set yet, return a loading state or null
    if (!currentVideo) {
        return <div>Loading...</div>;
    }

    // Assuming your API returns an object with image, title, and comments properties
    // Adjust these as necessary based on your actual API response structure
    const { image, title, comments } = currentVideo;

    return (
        <section className='current-video'>
            <div>
                <img src={image} alt={title} />
                <h1>{title}</h1>
            </div>
            <div className='current-video__comments'>
                {comments && comments.length > 0 ? (
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>
                                {/* If your API includes comment thumbnail images, add the src attribute here */}
                                <img className="current-video__comment-thumbnail" src={comment.thumbnail} alt="" /> 
                                <h3 className="current-video__comment-name">{comment.name}:</h3> 
                                <p className="current-video__comment-comment">{comment.comment}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments to display.</p>
                )}
            </div>
        </section>
    );
};

export default CurrentVideo;
