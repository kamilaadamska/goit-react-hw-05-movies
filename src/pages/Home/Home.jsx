import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchMovies';
import { Headline } from './Home.styled';
import { MovieList } from 'components';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const newData = await fetchTrendingMovies();
        const newMovies = newData.results;
        setMovies(newMovies);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <Headline>Trending today</Headline>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
