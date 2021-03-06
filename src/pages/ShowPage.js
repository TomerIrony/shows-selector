import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../utils/Api';
import BackButton from '../components/BackButton';

function ShowPage() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [show, setShow] = useState([]);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await api.getSingleShow(id);
      setShow(res);
      if (res.id) {
        const castRes = await api.getCast(id);
        setCast(castRes);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);
  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <>
          <div className="show">
            <BackButton />
          </div>

          <h1 className="show__title">{show.name}</h1>
          <div className="show__container">
            <p className="show__years">
              Aired{' '}
              {show.premiered +
                ' - ' +
                (show.ended === null ? 'Airing' : show.ended)}
            </p>

            <div className="show__genre">
              {show.genres
                ? show.genres.map((item, i) => {
                    return (
                      <div key={i} className="show__genre-item">
                        {item}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="show__image-container">
            {show.image ? (
              <img
                className="show__image"
                src={show.image.medium}
                alt={show.name}
              />
            ) : null}
            <div className="show__summary">
              {show.summary ? show.summary.replace(/<[^>]*>?/gm, '') : null}
            </div>
          </div>
          <div>
            <h2 className="show__cast-title">Cast</h2>

            <div className="show__cast">
              {cast.map((item, i) => {
                return (
                  <div key={i} className="show__cast-card">
                    <div className="show__name">{item.person.name}</div>
                    {item.person.image !== null ? (
                      <img
                        src={item.person.image.medium}
                        alt={item.person.name}
                      />
                    ) : (
                      <div className="card__image-placeholder">
                        No image found
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowPage;
