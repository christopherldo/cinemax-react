import { Film } from "lucide-react";
import { MovieGenre } from "./MovieGenre";

interface MovieGenresProps {
  genreIds: number[];
}

export const MovieGenres = ({ genreIds }: MovieGenresProps) => {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <Film size={16} color="#92929D" />
      <MovieGenre genreId={genreIds[0]} />
      <div className="h-full w-px bg-[#696974]" />
      <span className="font-medium text-white text-[12px]">Movie</span>
    </div>
  );
};
