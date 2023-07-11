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

  return response.data;
};

export const fetchMoviesWithQuery = async searchQuery => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        query: searchQuery,
      },
    }
  );
  if (searchQuery === '') return 'empty';

  return response.data;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};

export const fetchMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  return response.data.results;
};
