import { Headline, ListItem, List } from './Home.styled';

const Home = ({ movies }) => {
  return (
    <>
      <Headline>Trending today</Headline>
      <List>
        {movies.map(({ id, title }) => (
          <ListItem key={id}>{title}</ListItem>
        ))}
      </List>
    </>
  );
};

export default Home;
