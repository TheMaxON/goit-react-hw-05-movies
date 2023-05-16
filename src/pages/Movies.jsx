import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import PageTitle from '../components/PageTitle/PageTitle';
import Search from '../components/Search/Search';
import { getSearchedMovies } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    fetchSearchedMovies();
  }, [searchQuery]);

  const onSumbit = query => {
    setSearchQuery(query);
    console.log('onSumbit', query);
  };

  const fetchSearchedMovies = async () => {
    try {
      const data = await getSearchedMovies(searchQuery);
      setSearchedMovies(data);
      console.log(data);
    } catch (fetchError) {
      console.log(fetchError);
    }
  };

  return (
    <>
      <Section>
        <PageTitle title="Search Movies" />
      </Section>
      <Section>
        <Search onSubmit={onSumbit} />
      </Section>
      <Section>
        {searchedMovies.length > 0 && <MoviesList movies={searchedMovies} />}
        {!searchedMovies && <h2>No movies found</h2>}
      </Section>
    </>
  );
};

export default Movies;
