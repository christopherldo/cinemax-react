import { useState } from "react";
import { Movie } from "./Movie";
import { Loading } from "./Loading";
import { Error as ErrorComponent } from "./Error";
import { SearchBar } from "./SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import type { MovieSearch } from "../types/MovieSearch";

export const MovieList = () => {
  const [q, setQ] = useState("Spider-Man");

  const debouncedQ = useDebounce(q);
  const { error, isLoading, data } = useFetch<MovieSearch>(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      debouncedQ
    )}`
  );

  return (
    <>
      <SearchBar q={q} setQ={setQ} placeholder="Search a title..." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-7xl mx-auto p-4">
        <Loading isLoading={isLoading} />
        <ErrorComponent error={error} />
        {data &&
          data.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};
