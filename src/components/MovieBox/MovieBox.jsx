import {
  MovieContainer,
  StyledH2,
  StyledH3,
  StyledH4,
  GenresSpan,
} from './MovieBox.styled';

export const MovieBox = ({ movie }) => {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  const year = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : null;
  const percentageScore = (vote_average * 10).toFixed(0) + '%';
  const getGenres = genres.map(({ name }) => `${name}`);

  return (
    <MovieContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="movie poster"
        width="250"
      />
      <div>
        <StyledH2>
          {title} {year}
        </StyledH2>
        <span>User score: {percentageScore}</span>
        <StyledH3>Overview</StyledH3>
        <p>{overview ? overview : null}</p>
        <StyledH4>Genres</StyledH4>
        <GenresSpan>{getGenres.join(', ')}</GenresSpan>
      </div>
    </MovieContainer>
  );
};
