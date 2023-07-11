import { useParams, useLocation } from 'react-router-dom';
// import { BackLink } from '../components/BackLink';
import { fetchMovieById } from 'services/fetchMovies';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { MovieBox } from 'components';
import { StyledLink, Container } from './MovieDetails.styled';

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
  }, [id]);

  return (
    <main>
      {movie && <MovieBox movie={movie} />}
      <Container>
        <h3>Additional information</h3>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </Container>
      <Outlet />
    </main>
  );

  // const backLinkHref = location.state?.from ?? '/products'; // <BackLink to={backLinkHref}>Back to products</BackLink>
};

export default MovieDetails;
