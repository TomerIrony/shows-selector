import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Shows from './Shows';
import Pagination from './Pagination';

function Slides() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await api.getShows('Cold'); // inital value for search
      setShows(res);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="sliders">
      <h1 className="sliders__title">Recommended Shows</h1>
      <Shows shows={currentShows} loading={loading} />
      <Pagination
        paginate={paginate}
        showsPerPage={showsPerPage}
        totalShows={shows.length}
      />
    </div>
  );
}

export default Slides;
