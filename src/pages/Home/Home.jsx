import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchMovies';
import { Headline, ListItem, List } from './Home.styled';

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
      <List>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>{title}</ListItem>
        ))}
      </List>
    </>
  );
};

export default Home;
