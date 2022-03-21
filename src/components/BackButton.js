import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton(props) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="results__button"
    >
      Back
    </button>
  );
}

export default BackButton;
