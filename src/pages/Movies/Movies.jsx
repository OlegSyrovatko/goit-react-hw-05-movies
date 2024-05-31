import { React, useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchHeader, Form, Button, Input } from './Movies.styled';
import { getSearchMovies } from '../../services/content-api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [getted, setGetted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryS = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryS) {
      getSearchMovies(queryS).then(moveis => {
        setMovies(moveis.results);
      });
    }
  }, [queryS]);

  const location = useLocation();

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    Loading.circle('Loading...');
    getSearchMovies(query).then(moveis => {
      setMovies(moveis.results);
      setGetted(true);
    });
    setQuery('');
    Loading.remove();
  };

  return (
    <>
      <SearchHeader>
        <Form onSubmit={handleSubmit}>
          <Button type="submit"></Button>

          <Input
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="query"
            value={query}
            required
          />
        </Form>
      </SearchHeader>
      {getted && movies.length === 0 && (
        <p>We don't have any movies for this query</p>
      )}
      <ul>
        {movies.length > 1 &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Movies;
