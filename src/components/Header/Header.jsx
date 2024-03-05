import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure this is imported
import './Header.scss';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    if (inputError) setInputError(false);
  };

  return (
    <header className="page-header">
      {/* Wrap the logo with a Link to the home page */}
      <Link to="/">
        <img className="page-header__logo" src="./src/assets/images/BrainFlix-logo.svg" alt="BrainFlix logo" />
      </Link>
      <div className="page-header__container">
        <input
          className={`page-header__searchbar ${inputError ? 'page-header__searchbar--input-error' : ''}`}
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <img className="thumbnail" id="thumbnail-1" src="./src/assets/images/Mohan-muruge.jpg" alt="Mohan Muruge" />
      </div>
      <div className="page-header__container">
        <Link to="/upload" className="page-header__upload">Upload</Link>
        <img className="thumbnail" id="thumbnail-2" src="./src/assets/images/Mohan-muruge.jpg" alt="Mohan Muruge" />
      </div>
    </header>
  );
};

export default Header;
