import React from 'react';
import Card from './Card';

function Shows(props) {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="elements elements__main">
      {props.shows.map((show, i) => (
        <Card key={i} card={show} />
      ))}
    </ul>
  );
}

export default Shows;
