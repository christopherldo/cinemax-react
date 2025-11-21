import { Film } from "lucide-react";
import { formatGenre } from "../utils/formatGenre";

interface MovieGenreProps {
  genreId?: number;
  genreName?: string;
}

export const MovieGenre = ({ genreId, genreName }: MovieGenreProps) => {
  return (
    <div className="flex items-center gap-1">
      <Film size={16} color="#92929D" />
      <span className="font-medium text-grey text-[12px]">
        {genreId ? formatGenre(genreId) : genreName}
      </span>
    </div>
  );
};
