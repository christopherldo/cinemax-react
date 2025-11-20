import { Film } from "lucide-react";
import { formatGenre } from "../utils/formatGenre";

interface MovieGenreProps {
  genreId: number;
}

export const MovieGenre = ({ genreId }: MovieGenreProps) => {
  return (
    <div className="flex items-center gap-1">
      <Film size={16} color="#92929D" />
      <span className="font-medium text-grey text-[12px]">
        {formatGenre(genreId)}
      </span>
    </div>
  );
};
