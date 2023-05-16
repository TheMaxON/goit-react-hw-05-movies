import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import PageTitle from 'components/PageTitle/PageTitle';
import { Section } from 'components/Section/Section';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
    } catch (fetchError) {
      console.log(fetchError);
    }
  };
  return (
    <>
      <Section>
        <PageTitle title="Trending Today" />
      </Section>
      <Section>
        <MoviesList movies={trendingMovies} />
      </Section>
    </>
  );
};

export default Home;
