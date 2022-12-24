import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/moviesApi';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Error } from 'components/ErrorMessage/Error';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      <PageTitle title="Trending today" />
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
