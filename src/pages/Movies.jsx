import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';

import toast from 'react-hot-toast';

import { searchMovie } from 'services/moviesApi';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search === '') {
      return;
    }

    const getMovie = async () => {
      try {
        const data = await searchMovie(search);
        setMovies(data);
      } catch {}
    };

    getMovie();
  }, [search]);

  const searchHandler = event => {
    event.preventDefault();

    const movieSearch = event.target.search.value;

    if (movieSearch.trim() === '') {
      return toast.error('Enter something to search!!!');
    }

    setSearch(movieSearch);
    event.currentTarget.reset();
  };

  return (
    <main>
      <SearchBox onSubmit={searchHandler} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
