import React from 'react';

const Pagination = ({ paginate, totalShows, showsPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalShows / showsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="elements__navigation">
      <ul className="elements__buttons">
        {pageNumbers.map((number) => (
          <li key={number}>
            <div
              className={'elements__button'}
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
