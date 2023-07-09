import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

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
      <Outlet />
    </Container>
  );
};
