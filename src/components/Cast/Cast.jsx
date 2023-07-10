import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/fetchMovies';

const ShowCast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const newCast = await fetchMovieCast(id);
        setCast(newCast);
        console.log('nowi', cast);
      } catch (error) {
        console.error('Sorry, an error occured:', error);
      }
    };

    fetchCast();
  }, []);

  return (
    <p>
      {cast && cast.map(({ name }) => <span>{name}</span>)} Tu będą aktorzy...
    </p>
  );
};

export default ShowCast;
