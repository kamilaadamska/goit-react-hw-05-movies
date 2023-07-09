import axios from 'axios';

const API_KEY = '7d2ee557659270432d42f3d7f243b617';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  console.log(response.data);
  return response.data;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(response.data);
  return response.data;
};
