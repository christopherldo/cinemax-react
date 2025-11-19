import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import type { Movie as MovieType } from "../types/Movie";
import { movieService } from "../services/movieService";
import { Loading } from "./Loading";
import { Error as ErrorComponent } from "./Error";
import { SearchBar } from "./SearchBar";
import { useDebounce } from "../hooks/useDebounce";

export const MovieList = () => {
  const [q, setQ] = useState("Spider-Man");
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | string[]>("");

  const debouncedQ = useDebounce(q);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await movieService.search(debouncedQ);
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
  }, [debouncedQ]);

  return (
    <>
      <SearchBar q={q} setQ={setQ} placeholder="Search a title..." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-7xl mx-auto p-4">
        <Loading isLoading={isLoading} />
        <ErrorComponent error={error} />
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
