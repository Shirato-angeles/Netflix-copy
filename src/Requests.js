const key = 'f864b96e7697c04488c5263f0b8d2317'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${key}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

  };

  export default requests


  //f864b96e7697c04488c5263f0b8d2317 apiKey