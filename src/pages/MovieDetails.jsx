import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieInfo } from '../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  const fetchMovieInfo = async () => {
    try {
      const data = await getMovieInfo(movieId);
      console.log(data);
      setMovieInfo(data);
      setMovieGenres(data.genres);
    } catch (fetchError) {
      console.log(fetchError);
    }
  };

  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  const genresList = movieGenres.map(genre => genre.name).join(', ');

  console.log(genres);
  return (
    <div>
      <img src={movieInfo.poster_path} alt={title} />
      <h1>{title}</h1>
      <p>User score: {Math.round(vote_average * 10) / 10}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genresList}</p>
    </div>
  );
};

export default MovieDetails;
