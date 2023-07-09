import notFound from '../../images/img_noresults_movies.png';

export const Error = () => {
  return (
    <img
      src={notFound}
      alt="movie not found"
      style={{
        margin: '0 auto',
        display: 'block',
      }}
    />
  );
};
