import { useEffect, useState } from "react";
import type { MovieWithDetails } from "../types/Movie";
import { movieService } from "../services/movieService";

export const useMovieDetails = (movieId?: string) => {
  const [movie, setMovie] = useState<MovieWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | string[]>("");

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setIsLoading(true);

      if (!movieId) return;

      try {
        const data = await movieService.details(Number(movieId));
        if (!ignore) setMovie(data);
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
  }, [movieId]);

  return { movie, isLoading, error };
};
