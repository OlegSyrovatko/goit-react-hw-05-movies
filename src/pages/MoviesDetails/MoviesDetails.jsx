import { React, useEffect, useState } from 'react';
// import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/content-api';

import { Details, TextDetails, Genres, Add } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [title, setTitle] = useState([]);
  const [overview, setOverview] = useState([]);
  const [genres, setGenres] = useState([]);
  const [poster_path, setPoster_path] = useState(null);
  const [popularity, setPopularity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id).then(item => {
      setTitle(item.title);
      setOverview(item.overview);
      setGenres(item.genres);
      setPoster_path(item.poster_path);
      setPopularity(item.vote_average);
    });
  }, [id]);
  return (
    <>
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
