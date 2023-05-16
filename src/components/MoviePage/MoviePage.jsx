import { Suspense, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Section } from 'components/Section/Section';
import {
  MovieInfoSection,
  MoviePoster,
  MovieDetails,
  Subheading,
  Text,
  MovieAdditionalDetails,
  BackButton,
} from './MoviePage.styled';
import PageTitle from 'components/PageTitle/PageTitle';
import { StyledNav, StyledNavLink } from '../Header/Header.styled';

const MoviePage = ({ movieInfo, Outlet }) => {
  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w400/';
  const { poster_path, title, vote_average, overview, genres } = movieInfo;
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <>
      <Section>
        <BackButton to={backLinkRef.current}>⨞ Go back</BackButton>
      </Section>
      <Section>
        {!movieInfo && <h1>Loading...</h1>}
        {movieInfo && (
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
              <Text>
                {genres && genres.map(genre => genre.name).join(', ')}
              </Text>
            </MovieDetails>
            <MovieAdditionalDetails>
              <Subheading>
                Details about <i>{title}</i>
              </Subheading>
              <StyledNav>
                <StyledNavLink to="cast">Cast</StyledNavLink>
                <StyledNavLink to="reviews">Reviews</StyledNavLink>
              </StyledNav>
              <Suspense fallback={<div>Loading...</div>}>{Outlet}</Suspense>
            </MovieAdditionalDetails>
          </MovieInfoSection>
        )}
      </Section>
    </>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  movieInfo: PropTypes.object,
  Outlet: PropTypes.element,
};
