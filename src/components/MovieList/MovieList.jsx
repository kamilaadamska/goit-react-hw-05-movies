import { useLocation } from 'react-router-dom';
import { List, ListItem, StyledLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  const customRoute = id => {
    if (location.pathname !== '/movies') {
      return `movies/${id}`;
    } else {
      return `${id}`;
    }
  };

  console.log('lokacja listy filmów', location);

  return (
    <List>
      {movies.map(({ id, title }) => (
        <ListItem key={id}>
          <StyledLink to={customRoute(id)} state={{ from: location }}>
            {title}
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};
