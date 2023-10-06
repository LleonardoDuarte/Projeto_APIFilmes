import axios from "axios";

//npm install axios.

// BASE DA API:  "https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=c2b6491d0e05a93a05e73eafb5596fea

const url = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default url;
