import { React, useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/content-api';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Cast = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Loading.circle('Loading...');
    getMovieReviews(id).then(reviews => {
      setReviews(reviews.results);
    });
    Loading.remove();
  }, [id]);
  return (
    <>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.length > 1 &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              {author && <h3>{author}</h3>}
              {content && <p>Character: {content}</p>}
            </li>
          ))}
      </ul>
    </>
  );
};
export default Cast;
