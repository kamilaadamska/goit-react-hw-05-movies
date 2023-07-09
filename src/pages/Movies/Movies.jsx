import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from 'services/fetchMovies';
import { MovieList } from 'components';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const searchedTitle = searchParams.get('query') ?? '';
  console.log(searchedMovies);

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
      <form onSubmit={updateQueryString}>
        <input name="searchQuery" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={searchedMovies} />
    </main>
  );
};

export default Movies;
