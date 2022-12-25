import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/moviesApi';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Error } from 'components/Error/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    const getMovies = async () => {
      try {
        const data = await getTrendingMovies();

        const fetchedMovies = data.results.map(({ id, original_title }) => {
          return { id, original_title };
        });

        setMovies(fetchedMovies);
      } catch {
        setError('Something went wrong');
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      {error && <Error>{error}</Error>}z
      {movies?.length > 0 && (
        <>
          <PageTitle title="Trending today" />
          <MoviesList movies={movies} />
        </>
      )}
    </main>
  );
};

export default Home;
