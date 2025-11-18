import type { Movie } from "../types/Movie";

export const movieService = {
  async search(query: string): Promise<Movie[]> {
    let json = {} as { results: Movie[] };

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${new URLSearchParams(
        query
      )}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );

    json = await data.json();

    return json.results;
  },
};
