import { Section } from 'components/Section/Section';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  MovieInfoSection,
  MoviePoster,
  MovieDetails,
  Subheading,
  Text,
  MovieAdditionalDetails,
} from './MoviePage.styled';
import PageTitle from 'components/PageTitle/PageTitle';
import { StyledNav, StyledNavLink } from '../Header/Header.styled';

const MoviePage = ({ movieInfo }) => {
  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w400/';
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  return (
    <>
      <Section>
        <MovieInfoSection>
          {poster_path && (
            <MoviePoster src={IMAGES_BASE_URL + poster_path} alt={title} />
          )}
          <MovieDetails>
            <PageTitle title={title} />
            <Text>User score: {Math.round(vote_average * 10) / 10}</Text>
            <Subheading>Overview</Subheading>
            <Text>{overview}</Text>
            <Subheading>Genres</Subheading>
            <Text>{genres && genres.map(genre => genre.name).join(', ')}</Text>
          </MovieDetails>
          <MovieAdditionalDetails>
            <Subheading>
              Details about <i>{title}</i>
            </Subheading>
            <StyledNav>
              <StyledNavLink to="cast">Cast</StyledNavLink>
              <StyledNavLink to="reviews">Reviews</StyledNavLink>
            </StyledNav>
            <Outlet />
          </MovieAdditionalDetails>
        </MovieInfoSection>
      </Section>
    </>
  );
};

export default MoviePage;
