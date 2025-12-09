import { useState } from "react";
import { Movie } from "./Movie";
import { Loading } from "./Loading";
import { Error as ErrorComponent } from "./Error";
import { SearchBar } from "./SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import MovieService from "../services/MovieService";

export const MovieList = () => {
  const [q, setQ] = useState("Spider-Man");

  const debouncedQ = useDebounce(q);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => MovieService.getAllMovies(debouncedQ),
  });

  return (
    <>
      <SearchBar q={q} setQ={setQ} placeholder="Search a title..." />
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full max-w-7xl mx-auto p-4 lg:max-w-full">
        <Loading isLoading={isPending} />
        {isError && <ErrorComponent error={error.message} />}
        {data &&
          data.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};
