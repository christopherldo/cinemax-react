import type { MovieWithDetails } from "../types/Movie";
import type { MovieSearch } from "../types/MovieSearch";

const MovieService = {
  async getAllMovies(q: string) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${q}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );

    if (!response.ok)
      throw new Error(`Error: ${response.status} ${response.statusText}`);

    const json = await response.json();

    return json as MovieSearch;
  },
  async getMovie(id?: string) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    });

    if (!response.ok)
      throw new Error(`Error: ${response.status} ${response.statusText}`);

    const json = await response.json();

    return json as MovieWithDetails;
  },
};

export default MovieService;
