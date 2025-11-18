import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import type { Movie as MovieType } from "../types/Movie";

export const MovieList = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=Spider-Man",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTlhNjE1YjBlNzZkZDQwN2JhZDhiNjYyNzAyOWI5OSIsIm5iZiI6MTc2MzQzMDkwMy40NTgsInN1YiI6IjY5MWJkMWY3YTU0YWM4MDdiNDgxYzQzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5R1gDKrBW93OZC0fQyV5Y9lcyU3PgdB8Kdlhe1HuPUE",
          },
        }
      );

      const json = await data.json();
      setMovies(json.results);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full items-center py-8">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};
