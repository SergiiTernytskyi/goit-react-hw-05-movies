import axios from 'axios';

const KEY = '86c51b00b5bb8cfadb7d5efaffb91bf1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const axiosUrl = `trending/movie/week?api_key=${KEY}`;
  const { data } = await axios.get(axiosUrl);
  return data;
}

export async function searchMovie(value) {
  const axiosUrl = `search/movie?api_key=${KEY}&query=${value}&language=en-US&include_adult=false`;
  const { data } = await axios.get(axiosUrl);
  return data;
}

export async function getMovieDetails(movieId) {
  const axiosUrl = `movie/${movieId}?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(axiosUrl);
  return data;
}

export async function getMoviesCredit(movieId) {
  const axiosUrl = `movie/${movieId}/credits?api_key=${KEY}&language=en-US`;
  const { data } = await axios.get(axiosUrl);
  return data;
}

export async function getMovieReviews(movieId) {
  const axiosUrl = `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;
  const { data } = await axios.get(axiosUrl);
  return data;
}
