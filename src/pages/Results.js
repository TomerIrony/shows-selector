import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import api from '../utils/Api';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';
import NothingFound from '../components/NothingFound';

function Results() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const q = location.pathname.split('/')[2].replace(/%20/g, ' ');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await api.getShows(q);
      setShows(res);
      setLoading(false);
    };

    fetchPosts();
  }, [q]);

  return (
    <div>
      <div className="results">
        <BackButton />
      </div>
      <h1 className="results__title">Your results for {`'${q}'`}</h1>
      <div
        className={
          loading || shows.length === 0 ? 'elements-loader' : 'elements'
        }
      >
        {loading ? (
          <h2>
            <Loader />
          </h2>
        ) : shows.length === 0 ? (
          <NothingFound />
        ) : (
          shows.map((card, i) => {
            return <Card key={i} card={card} />;
          })
        )}
      </div>
    </div>
  );
}

export default Results;
