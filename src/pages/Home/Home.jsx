import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { trendingMovies } from '../../services/content-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
            {/* <Link to={`/movies/${id}`} state={{ from: location }}> */}
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </>
    </>
  );
};
export default Home;
