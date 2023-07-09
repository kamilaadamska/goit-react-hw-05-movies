import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';
import { fetchTrendingMovies } from 'services/fetchMovies';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
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
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home movies={movies} />} />
      </Route>
    </Routes>
  );
};
