import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import api from '../utils/Api';

function Results(props) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const q = location.pathname.split('/')[2];
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
      <h1>Your resulsts for '{q}'</h1>
      <div className="elements">
        {loading ? (
          <h2>Loading...</h2>
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
