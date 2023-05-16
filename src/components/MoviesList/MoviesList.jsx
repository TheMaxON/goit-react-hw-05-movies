import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  StyledMoviesList,
  MoviesListItem,
  MoviesPoster,
  MoviesTitle,
} from './MoviesList.styled';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledMoviesList>
      {movies.map(({ id, poster_path, title }) => (
        <MoviesListItem
          key={id}
          state={{ from: location }}
          to={`/movies/${id}`}
        >
          {poster_path && (
            <MoviesPoster
              src={IMAGES_BASE_URL + poster_path}
              loading="lazy"
              alt={title}
            />
          )}
          {<MoviesTitle>{title}</MoviesTitle>}
        </MoviesListItem>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
