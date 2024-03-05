import React, { useRef } from 'react';
import './UploadForm.scss'; // Make sure to create an UploadForm.scss file to style your form

const UploadForm = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    console.log('Title:', title);
    console.log('Description:', description);
    // Here you would handle the submission, e.g., post to an API
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={handleSubmit} className="upload-form">
        <h1>Upload Video</h1>
        <label htmlFor="video-thumbnail" className="upload-form__label">VIDEO THUMBNAIL</label>
        <div className="upload-form__thumbnail">
          {/* Thumbnail image here */}
        </div>
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
