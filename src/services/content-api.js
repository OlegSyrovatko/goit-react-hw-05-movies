const API_KEY = '?api_key=1bee1caa8eeb54a46f7cee2e958da6e1';
  
export const trendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};


export const getSearchMovies = async (q) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${q}`
  );
  const data = await response.json();
    return data;
};


export const getMovieDetails = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}${API_KEY}`
  );
  const data = await response.json();
    return data;
};

export const getMovieCredits = async (id) => {
  const response = await fetch( 
    `https://api.themoviedb.org/3/movie/${id}/credits${API_KEY}`
  );
  const data = await response.json();
    return data;
};

export const getMovieReviews = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews${API_KEY}`
  );
  const data = await response.json();
    return data;
};
