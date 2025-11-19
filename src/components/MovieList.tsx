import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import type { Movie as MovieType } from "../types/Movie";
import { movieService } from "../services/movieService";

export const MovieList = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const data = await movieService.search("Spider-Man");

      if (!ignore) setMovies(data);
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-7xl mx-auto p-4">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
