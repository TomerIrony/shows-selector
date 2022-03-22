import React from 'react';

function Preloader() {
  return (
    <div className="loader">
      <i className="loader__circle"></i>
      <p className="loader__text">Searching...</p>
    </div>
  );
}

export default Preloader;
