import React from 'react';
import Card from './Card';
import Loader from './Loader';

const Shows = ({ loading, shows }) => {
  if (loading) {
    return (
      <div className="loader__main">
        <h2>
          <Loader />
        </h2>
      </div>
    );
  }
  return (
    <ul className="elements elements__main">
      {shows.map((show, i) => (
        <Card key={i} card={show} />
      ))}
    </ul>
  );
};

export default Shows;
