import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { searchMovie } from 'services/moviesApi';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams?.get('query') ?? '';

  useEffect(() => {
    setError(null);

    if (movieName === '') {
      return;
    }

    const getMovie = async () => {
      try {
        setIsLoading(true);

        const movies = await searchMovie(movieName);

        const fetchedMovies = movies.results.map(({ id, original_title }) => {
          return { id, original_title };
        });

        setMovies(fetchedMovies);

        if (movies.total_results === 0) {
          setError('We did not find anything');
        }
      } catch {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [movieName]);

  const searchHandler = event => {
    event.preventDefault();

    const movieSearch = event.target.search.value;
    if (movieSearch.trim() === '') {
      return toast.error('Enter something to search!!!');
    }

    setSearchParams({ query: movieSearch.toLowerCase() });
    event.currentTarget.reset();
  };

  return (
    <main>
      <SearchBox onSubmit={searchHandler} />
      {error && <Error>{error}</Error>}
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
