import { useState } from "react";
import { Movie } from "./Movie";
import { Loading } from "./Loading";
import { Error as ErrorComponent } from "./Error";
import { SearchBar } from "./SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useMovieSearch } from "../hooks/useMovieSearch";

export const MovieList = () => {
  const [q, setQ] = useState("Spider-Man");

  const debouncedQ = useDebounce(q);
  const { error, isLoading, movies } = useMovieSearch(debouncedQ);

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
