import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const id = props.card.show.id;
  return (
    <div className="card">
      <Link className="card__link" to={`/show/${id}`}>
        {props.card.show.image ? (
          <img
            className="card__image"
            src={props.card.show.image.medium}
            alt={props.card.show.name}
          />
        ) : (
          <div className="card__image-placeholder">No image found</div>
        )}
        <h2 className="card__title">{props.card.show.name}</h2>
      </Link>
    </div>
  );
}

export default Card;
