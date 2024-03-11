import React, { useRef } from 'react';
import axios from 'axios'; // Make sure axios is imported
import './UploadForm.scss';

const UploadForm = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    // Example data structure. Adjust according to your API requirements.
    const videoData = {
      title: title,
      description: description,
      channel: "YourChannelName", // Example static value. Adjust as needed.
      image: "path/to/default/image.jpg", // Adjust as needed
      views: 0,
      likes: 0,
      duration: "10:00", // Example static value
      video: "path/to/video/file.mp4", // Adjust as needed
      timestamp: Date.now(),
      comments: [] // Starting with an empty comments array
    };

    try {
      const response = await axios.post('http://localhost:8080/videos', videoData);
      console.log('Response:', response.data);
      // Handle success (e.g., showing a success message, redirecting, etc.)
    } catch (error) {
      console.error('Error posting video:', error);
      // Handle error (e.g., showing an error message)
    }
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={handleSubmit} className="upload-form">
        <h1>Upload Video</h1>
        <label htmlFor="title" className="upload-form__label">TITLE YOUR VIDEO</label>
        <input
          id="title"
          type="text"
          ref={titleRef}
          className="upload-form__input"
          placeholder="Add a title to your video"
          required
        />
        <label htmlFor="description" className="upload-form__label">ADD A VIDEO DESCRIPTION</label>
        <textarea
          id="description"
          ref={descriptionRef}
          className="upload-form__textarea"
          placeholder="Add a description to your video"
          required
        />
        <button type="submit" className="upload-form__submit">PUBLISH</button>
      </form>
    </div>
  );
};

export default UploadForm;
