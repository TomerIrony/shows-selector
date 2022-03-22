import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const id = card.show.id;
  return (
    <div className="card">
      <Link className="card__link" to={`/show/${id}`}>
        {card.show.image ? (
          <img
            className="card__image"
            src={card.show.image.medium}
            alt={card.show.name}
          />
        ) : (
          <div className="card__image-placeholder">No image found</div>
        )}
        <h2 className="card__title">{card.show.name}</h2>
      </Link>
    </div>
  );
};

export default Card;
