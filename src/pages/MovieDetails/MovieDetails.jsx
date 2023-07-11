import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components';
import { fetchMovieById } from 'services/fetchMovies';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { MovieBox } from 'components';
import { StyledLink, Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const backLinkHref = location.state?.from ?? '/movies';

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
      <BackLink to={backLinkHref} />
      {movie && <MovieBox movie={movie} />}
      <Container>
        <h3>Additional information</h3>
        <ul>
          <li>
            <StyledLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </Container>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
