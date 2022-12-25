import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Error } from 'components/Error/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

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
      <PageTitle title="Trending today" />
      {error && <Error>{error}</Error>}
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </main>
  );
};

export default Home;
