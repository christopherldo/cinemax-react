import { Star } from "lucide-react";
import type { Movie as MovieType } from "../types/Movie";
import { formatVoteAverage } from "../utils/formatVoteAverage";

interface MovieProps {
  movie: MovieType;
}

export const Movie = ({ movie }: MovieProps) => {
  return (
    <div className="flex gap-4 w-full max-w-sm min-w-0 mx-auto">
      <div className="w-28 h-[147px] shrink-0 rounded-lg relative overflow-hidden">
        <img
          className="block w-full h-full "
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} movie poster`}
          draggable={false}
        />
        <div className="absolute flex items-center gap-1 top-2 left-2 py-1 px-2 bg-[rgba(37,40,54,0.32)] rounded-lg backdrop-blur-[20px]">
          <Star size={16} color="#FF8700" fill="#FF8700" />
          <span className="font-semibold text-[12px]">
            {formatVoteAverage(movie.vote_average)}
          </span>
        </div>
      </div>
      <div className="max-w-50 sm:max-w-full flex flex-1 flex-col gap-3">
        <span className="block font-semibold text-[16px] truncate">
          {movie.title}
        </span>
      </div>
    </div>
  );
};
