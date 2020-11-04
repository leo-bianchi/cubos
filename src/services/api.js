import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/550?api_key=54f61b9fd680fabc66f7982b051c87bf",
});

export default api;
