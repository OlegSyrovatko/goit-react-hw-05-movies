import { React, useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/content-api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import {
  Details,
  TextDetails,
  Genres,
  Add,
  BackLink,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [title, setTitle] = useState([]);
  const [overview, setOverview] = useState([]);
  const [genres, setGenres] = useState([]);
  const [poster_path, setPoster_path] = useState(null);
  const [popularity, setPopularity] = useState(null);
  const [backLinkHref, setBackLinkHref] = useState('/movies');
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.from) {
      if (location.state.from.search.indexOf('query') >= 0) {
        setBackLinkHref('/movies' + location.state.from.search);
      }
      if (location.state.from.pathname === '/') {
        setBackLinkHref('/');
      }
    }
  }, [location.state]);

  useEffect(() => {
    async function fetchData() {
      Loading.circle('Loading...');
      const { title, overview, genres, poster_path, vote_average } =
        await getMovieDetails(id);
      setTitle(title);
      setOverview(overview);
      setGenres(genres);
      setPoster_path(poster_path);
      setPopularity(vote_average);
      Loading.remove();
    }

    fetchData();
  }, [id]);
  return (
    <>
      <BackLink>
        <Link to={backLinkHref}>Back to movies</Link>
      </BackLink>
      <Details>
        <>
          {' '}
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          )}
        </>
        <TextDetails>
          <>
            <h1>{title}</h1>
          </>

          {popularity && <>User Score: {Math.round(popularity * 10)}%</>}
          {overview && (
            <>
              <h2>Overview</h2> <>{overview}</>
            </>
          )}

          {genres && (
            <>
              <>
                <h3>Genres</h3>
              </>
              <Genres>
                {genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </Genres>
            </>
          )}
        </TextDetails>
      </Details>
      <Details>
        <TextDetails>
          <h3>Additional information</h3>
          <Add>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
            <Link to={`/movies/${id}/reviews`}>Reviews </Link>
          </Add>
        </TextDetails>
      </Details>
      <Outlet />
    </>
  );
};
export default MoviesDetails;
