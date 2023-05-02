import { React, useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import { getMovieDetails } from '../../services/content-api';

// import { Backdrop, ModalContent } from './Modal.styled';

const MoviesDetails = () => {
  const [title, setTitle] = useState([]);
  const [overview, setOverview] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id).then(item => {
      console.log(item);
      setTitle(item.title);
      setOverview(item.overview);
      setGenres(item.genres);
    });
  }, []);
  return (
    <>
      {title}
      <br />
      {overview}
      <br />
      {genres.map(genre => (
        <span key={genre.id}>{genre.name} </span>
      ))}
      <br />

      <Outlet />
    </>
  );
};
export default MoviesDetails;
