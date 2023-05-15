import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import PageTitle from 'components/PageTitle/PageTitle';

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
    <div>
      <PageTitle title="Trending today" />
      <TrendingMovies movies={trendingMovies} />
    </div>
  );
};

export default Home;
