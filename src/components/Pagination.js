import React from 'react';

function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalShows / props.showsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="elements__navigation">
      <ul className="elements__buttons">
        {pageNumbers.map((number) => (
          <li key={number}>
            <div
              className={'elements__button'}
              onClick={(e) => {
                props.paginate(number);
              }}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
