import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMovies } from '../../services/content-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    trendingMovies().then(list => {
      setMovies(list);
    });
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </>
    </>
  );
};
export default Home;
