import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from 'services/fetchMovies';
import { MovieList } from 'components';
import { StyledForm, StyledInput, StyledButton } from './Movies.styled';
import notFound from '../../images/img_noresults_movies.png';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState('');
  const searchedTitle = searchParams.get('query') ?? '';

  const updateQueryString = event => {
    event.preventDefault();
    const searchForm = event.target;
    const searchedMovie = searchForm.elements.searchQuery.value;
    const nextParams = searchedMovie !== '' ? { query: searchedMovie } : {};
    setSearchParams(nextParams);
    searchForm.reset();
  };

  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        setError('');
        const newData = await fetchMoviesWithQuery(searchedTitle);
        const newMovies = newData.results;

        if (newData !== 'empty' && newMovies.length === 0) setError('error');
        newMovies ? setSearchedMovies(newMovies) : setSearchedMovies([]);
      } catch (error) {
        setError(error);
      }
    };

    getSearchedMovies();
  }, [searchedTitle]);

  return (
    <main>
      <StyledForm onSubmit={updateQueryString}>
        <StyledInput name="searchQuery" />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
      <MovieList movies={searchedMovies} />
      {error && (
        <img
          src={notFound}
          alt="movie not found"
          style={{
            margin: '0 auto',
            display: 'block',
          }}
        />
      )}
    </main>
  );
};

export default Movies;
