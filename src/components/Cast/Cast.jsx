import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/fetchMovies';
import { CastList } from 'components/CastList';

const ShowCast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setError('');
        const newCast = await fetchMovieCast(id);
        if (newCast.length === 0) throw new Error();
        setCast(newCast);
      } catch (error) {
        setError('No cast found in our database.');
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div>
      {cast && <CastList cast={cast} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ShowCast;
