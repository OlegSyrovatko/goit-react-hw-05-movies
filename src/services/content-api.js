const API_KEY = '?api_key=1bee1caa8eeb54a46f7cee2e958da6e1';
  
const trendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export default trendingMovies;