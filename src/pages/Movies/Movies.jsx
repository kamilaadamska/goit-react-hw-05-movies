import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedTitle = searchParams.get('searchedMovie') ?? '';

  const updateQueryString = event => {
    event.preventDefault();
    const searchForm = event.target;
    const searchedMovie = searchForm.elements.searchQuery.value;
    console.log(searchedMovie);
    const nextParams = searchedMovie !== '' ? { searchedMovie } : {};
    setSearchParams(nextParams);
    console.log('params', searchParams);
  };

  console.log('title', searchedTitle);

  return (
    <main>
      <form onSubmit={updateQueryString}>
        <input name="searchQuery" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default Movies;
