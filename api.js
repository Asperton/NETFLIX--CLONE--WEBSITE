const API_KEY = "YOUR_API_KEY";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_URL = "https://image.tmdb.org/t/p/original";
const HAS_API_KEY = API_KEY !== "YOUR_API_KEY";

const POPULAR = HAS_API_KEY
    ? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    : null;

const TOP_RATED = HAS_API_KEY
    ? `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    : null;

const UPCOMING = HAS_API_KEY
    ? `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    : null;