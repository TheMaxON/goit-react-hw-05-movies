import axios from 'axios';

const API_KEY = 'a686af912263638c370a0fbfc3731476';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieInfo = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
