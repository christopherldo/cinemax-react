import type { Movie, MovieWithDetails } from "../types/Movie";

export const movieService = {
  async search(query: string): Promise<Movie[]> {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );

    const json = (await data.json()) as { results: Movie[] };
    return json.results;
  },
  async details(movieId: number): Promise<MovieWithDetails> {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    });

    const json = (await data.json()) as MovieWithDetails;
    return json;
  },
};
