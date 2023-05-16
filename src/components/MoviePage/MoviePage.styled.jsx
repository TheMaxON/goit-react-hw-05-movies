import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const MoviePoster = styled.img`
  border-radius: 10px;
`;

export const MovieDetails = styled.div`
  width: 1200px;
  color: var(--color-text);
  overflow: hidden;
`;

export const Subheading = styled.h2`
  font-size: 37px;
`;

export const Text = styled.p`
  margin: 15px 0;
  font-size: 18px;
  padding: 8px 10px 15px 10px;
  border-bottom: 2px solid var(--color-primary);
`;

export const MovieAdditionalDetails = styled.div`
  width: 700px;
  height: 600px;
  overflow: hidden auto;
  padding: 20px;
  border-radius: 15px;
  background-color: var(--color-secondary);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  ::-webkit-scrollbar {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-accent);
  }
`;

export const BackButton = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  background-color: var(--color-primary);
  padding: 10px 20px;
  border-radius: 10px;
`;
