import type { Movie as MovieType } from "../types/Movie";
import { MovieReleaseDate } from "./MovieReleaseDate";
import { MovieGenres } from "./MovieGenres";
import { Link } from "react-router-dom";
import { MoviePoster } from "./MoviePoster";
import { MovieRate } from "./MovieRate";
import { MovieTitle } from "./MovieTitle";

interface MovieProps {
  movie: MovieType;
}

export const Movie = ({ movie }: MovieProps) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="flex gap-4 w-full max-w-sm min-w-0 mx-auto"
    >
      <div className="w-28 h-[147px] shrink-0 rounded-lg relative overflow-hidden">
        <MoviePoster
          moviePosterPath={movie.poster_path}
          movieTitle={movie.title}
        />
        <MovieRate movieVoteAverage={movie.vote_average} />
      </div>
      <div className="max-w-52 sm:max-w-full flex flex-1 flex-col gap-3">
        <MovieTitle movieTitle={movie.title} />
        <MovieReleaseDate releaseDateString={movie.release_date} />
        <MovieGenres genreIds={movie.genre_ids} />
      </div>
    </Link>
  );
};
