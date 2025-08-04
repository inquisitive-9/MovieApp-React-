const API_KEY = "f0c1b2d3e4f5g6h7i8j9k0l1m2n3o4p5";
 const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=
 ${API_KEY}&language=en-US&page=1`;

 export const getPopularMovies = async() => {
    const response = await fetch('${BASE_URL}/movie/popular?api_key=${API_KEY}');
    const data = await response.json();
    return data.results;
 };

 export const searchMovies = async(query) => {
    const response = await fetch('${BASE_URL}/search/movie?api_key=${API_KEY}');
    const data = await response.json();
    return data.results;
 };
