import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { RotatingTriangles } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <a href="/">
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
      <Suspense fallback={<RotatingTriangles />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
