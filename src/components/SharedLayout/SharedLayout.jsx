import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { Loader } from 'components/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <a href="https://kamilaadamska.github.io/goit-react-hw-05-movies/">
          <Logo>
            <span role="img" aria-label="movie icon">
              🎬
            </span>{' '}
            MovieBox
          </Logo>
        </a>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
