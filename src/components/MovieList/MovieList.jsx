import { List, ListItem } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <ListItem key={id}>{title}</ListItem>
      ))}
    </List>
  );
};
