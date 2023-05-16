import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
`;

export const MoviesListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const MoviesPoster = styled.img`
  width: 100%;
  height: 100%;
`;

export const MoviesTitle = styled.h2`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: var(--color-text);
  padding: 20px;
  background-color: #01000adb;
  backdrop-filter: blur(15px);
`;
