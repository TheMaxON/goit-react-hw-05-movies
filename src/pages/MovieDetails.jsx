import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieInfo } from '../services/api';
import MoviePage from 'components/MoviePage/MoviePage';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    fetchMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovieInfo = async () => {
    try {
      const data = await getMovieInfo(movieId);
      setMovieInfo(data);
    } catch (fetchError) {
      console.log(fetchError);
    }
  };

  return (
    <>
      <MoviePage movieInfo={movieInfo} Outlet={<Outlet />} />
    </>
  );
};

export default MovieDetails;
