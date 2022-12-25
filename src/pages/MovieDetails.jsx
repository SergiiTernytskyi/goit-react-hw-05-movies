import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from 'services/moviesApi';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setError(null);

    const getDetail = async () => {
      try {
        const {
          poster_path,
          original_title,
          vote_average,
          overview,
          release_date,
        } = await getMovieDetails(movieId);

        const fetchedDetails = {
          poster_path,
          original_title,
          vote_average,
          overview,
          release_date,
        };
        setMovie(fetchedDetails);
      } catch {
        setError('Something went wrong');
      }
    };
    getDetail();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { poster_path, original_title, vote_average, overview, release_date } =
    movie;

  return (
    <main>
      {error && <Error>{error}</Error>}
      <BackLink to={backLinkHref}>Go back</BackLink>

      {movie !== {} && (
        <MovieCard
          poster={poster_path}
          title={original_title}
          vote={vote_average}
          overview={overview}
          year={release_date}
        />
      )}

      <AdditionalInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
