import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import { movieService } from "../services/movieService";

export const useMovieSearch = (q: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | string[]>("");

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      if (!q) {
        setMovies([]);
        return;
      }

      setIsLoading(true);

      try {
        const data = await movieService.search(q);
        if (!ignore) setMovies(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error ocurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [q]);

  return { movies, isLoading, error };
};
