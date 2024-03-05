import React from 'react';
import { Link } from 'react-router-dom';
import UploadForm from '../../components/UploadForm/UploadForm';
const UploadPage = () => {
  return (
    <div>
      <h1>Upload Page</h1>
      {/* Link back to HomePage */}
      <UploadForm/>
    </div>
  );
};

export default UploadPage;
