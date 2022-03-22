import React from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  let navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__headline">Which show is on your Mind?</h1>
        <p className="header__text">Find your favorite shows on one place</p>
      </div>
      <form
        onSubmit={(e) => {
          navigate(`results/${e.target[1].value}`);

          e.target[1].value = '';
        }}
        action="/"
        className="header__form"
      >
        <fieldset className="header__form-fieldset">
          <input
            className="header__form-input"
            type="text"
            placeholder="Enter topic"
            required
            id="searchBar"
            maxLength="50"
          />
          <button type="submit" className="header__form-btn">
            Search
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Search;
