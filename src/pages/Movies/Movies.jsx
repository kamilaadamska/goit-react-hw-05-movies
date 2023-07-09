import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from 'services/fetchMovies';
import { MovieList } from 'components';
import { StyledForm, StyledInput, StyledButton } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const searchedTitle = searchParams.get('query') ?? '';

  const updateQueryString = event => {
    event.preventDefault();
    const searchForm = event.target;
    const searchedMovie = searchForm.elements.searchQuery.value;
    const nextParams = searchedMovie !== '' ? { query: searchedMovie } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        const newData = await fetchMoviesWithQuery(searchedTitle);
        const newMovies = newData.results;
        newMovies ? setSearchedMovies(newMovies) : setSearchedMovies([]);
      } catch (error) {
        console.log(error.message);
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
    </main>
  );
};

export default Movies;
