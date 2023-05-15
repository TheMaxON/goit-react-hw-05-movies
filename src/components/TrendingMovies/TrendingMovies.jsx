import { Link } from 'react-router-dom';
import { TrengingMoviesList } from './TrendingMovies.styled';

const TrendingMovies = ({ movies }) => {
  return (
    <TrengingMoviesList>
      {movies.map(({ id, title }) => (
        <Link key={id} to={`/movies/${id}`}>
          {title}
        </Link>
      ))}
    </TrengingMoviesList>
  );
};

export default TrendingMovies;
