import { React, useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/content-api';
import { Ul, Li, Aboute, P } from './Cast.styled';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [heroes, setHeroes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieCredits(id).then(heroes => {
      setHeroes(heroes.cast);
    });
  }, [id]);
  return (
    <Ul>
      {heroes.map(({ id, name, character, profile_path }) => (
        <Li key={id}>
          <>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                width={50}
              />
            )}
            <Aboute>
              {name && <P>{name}</P>}
              {character && <P>Character: {character}</P>}
            </Aboute>
          </>
        </Li>
      ))}
    </Ul>
  );
};
export default Cast;
