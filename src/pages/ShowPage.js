import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../utils/Api';

function ShowPage(props) {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [show, setShow] = useState([]);
  useEffect(() => {
    api.getSingleShow(id).then((res) => {
      setShow(res);
    });
  }, [id]);
  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.genres}</p>
    </div>
  );
}

export default ShowPage;
