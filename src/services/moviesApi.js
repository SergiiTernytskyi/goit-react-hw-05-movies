import axios from 'axios';

const KEY = '86c51b00b5bb8cfadb7d5efaffb91bf1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const axiosParams = {
  params: {
    language: 'en-US',
  },
};

export async function getTrendingMovies() {
  const axiosUrl = `trending/movie/day?api_key=${KEY}`;
  const { data } = await axios.get(axiosUrl);
  return data;
}

export async function searchMovie(value) {
  const axiosUrl = `search/movie?api_key=${KEY}&query=${value}&include_adult=false`;
  const { data } = await axios.get(axiosUrl, axiosParams);
  return data;
}

export async function getMovieDetails(movieId) {
  const axiosUrl = `movie/${movieId}?api_key=${KEY}`;
  const { data } = await axios.get(axiosUrl, axiosParams);
  return data;
}

export async function getMoviesCredit(movieId) {
  const axiosUrl = `movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(axiosUrl, axiosParams);
  return data;
}

export async function getMovieReviews(movieId) {
  const axiosUrl = `movie/${movieId}/reviews?api_key=${KEY}&page=1`;
  const { data } = await axios.get(axiosUrl, axiosParams);
  return data;
}
