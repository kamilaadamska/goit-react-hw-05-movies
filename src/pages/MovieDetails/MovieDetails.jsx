import { useParams, useLocation } from 'react-router-dom';
// import { BackLink } from '../components/BackLink';
import { fetchMovieById } from 'services/fetchMovies';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MovieBox } from 'components';

const MovieDetails = () => {
  const { id } = useParams();
  // const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const newMovie = await fetchMovieById(id);
        setMovie(newMovie);
      } catch (error) {
        console.error('Sorry, an error occured:', error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <main>
      {movie && <MovieBox movie={movie} />}
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );

  // const backLinkHref = location.state?.from ?? '/products'; // <BackLink to={backLinkHref}>Back to products</BackLink>
};

export default MovieDetails;
