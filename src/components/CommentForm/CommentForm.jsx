import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ videoId }) => {
    
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(videoId);
        if (!comment.trim() || !name.trim()) return; // Check for empty inputs

        const requestBody = {
            name: name,
            comment: comment,
        };

        try {
            const response = await axios.post(`http://localhost:8080/videos/${videoId}/comments`, requestBody);
            console.log(response.data);
            setComment('');
            setName('');
        } catch (error) {
            console.error('Error posting comment:', error.response || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={handleNameChange}
                required
            />
            <textarea
                placeholder="Add a new comment"
                value={comment}
                onChange={handleCommentChange}
                required
            />
            <button type="submit">
                COMMENT
            </button>
        </form>
    );
};

export default CommentForm;
