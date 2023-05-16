import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import {
  CastMemberWrapper,
  CastMember,
  CastMemberPhoto,
  CastMemberInfo,
  CastMemberName,
} from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovieCast = async () => {
    try {
      const data = await getMovieCast(movieId);
      setMovieCast(data);
    } catch (fetchError) {
      console.log(fetchError);
    }
  };

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <CastMemberWrapper>
      {movieCast.length === 0 && <p>No cast info yet.</p>}
      {movieCast &&
        movieCast.map(({ cast_id, name, character, profile_path }) => (
          <CastMember key={cast_id}>
            {profile_path && (
              <CastMemberPhoto
                src={IMAGES_BASE_URL + profile_path}
                loading="lazy"
                alt={name}
              />
            )}
            <CastMemberInfo>
              <CastMemberName>{name}</CastMemberName>
              <p>as {character}</p>
            </CastMemberInfo>
          </CastMember>
        ))}
    </CastMemberWrapper>
  );
};

export default Cast;
