import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { Loading } from "./Loading";
import { Error as ErrorComponent } from "./Error";
import { SearchBar } from "./SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieService from "../services/MovieService";
import { useScroll } from "../hooks/useScroll";

export const MovieList = () => {
  const [q, setQ] = useState("Spider-Man");

  const debouncedQ = useDebounce(q);
  const { hasReachedEndOfPage } = useScroll(200);

  const {
    isPending,
    isError,
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["movies", debouncedQ],
    queryFn: ({ pageParam }) =>
      MovieService.getAllMovies(debouncedQ, pageParam),
    initialPageParam: 1,
    getNextPageParam: (search) =>
      search.page < search.total_pages ? search.page + 1 : undefined,
  });

  useEffect(() => {
    if (hasReachedEndOfPage) fetchNextPage();
  }, [hasReachedEndOfPage, fetchNextPage]);

  return (
    <div>
      <SearchBar q={q} setQ={setQ} placeholder="Search a title..." />
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 w-full max-w-7xl mx-auto p-4 lg:max-w-full">
        <Loading isLoading={isPending} />
        {isError && <ErrorComponent error={error.message} />}
        {data?.pages.map(
          (group) =>
            data &&
            group.results.map((movie) => <Movie key={movie.id} movie={movie} />)
        )}
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </div>
  );
};
