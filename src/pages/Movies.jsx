import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Section } from 'components/Section/Section';
import PageTitle from '../components/PageTitle/PageTitle';
import Search from '../components/Search/Search';
import { getSearchedMovies } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isFirstRender = useRef(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (isFirstRender.current || searchQuery === '') {
      isFirstRender.current = false;
      return;
    }

    setSearchParams({ query: searchQuery });
    fetchSearchedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    query && setSearchQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onSumbit = query => {
    setSearchQuery(query);
  };

  const fetchSearchedMovies = async () => {
    try {
      setIsLoading(true);
      const data = await getSearchedMovies(searchQuery);
      setSearchedMovies(data);
      setIsLoading(false);
      if (data.length === 0) {
        return toast.info('No movies found', {
          theme: 'dark',
        });
      }
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
        {isLoading && <Loader />}
        {searchedMovies.length > 0 && <MoviesList movies={searchedMovies} />}
        {!searchedMovies && <h2>No movies found</h2>}
      </Section>
    </>
  );
};

export default Movies;
