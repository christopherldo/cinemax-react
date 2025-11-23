import { Film } from "lucide-react";
import { formatGenre } from "../utils/formatGenre";

interface MovieGenreProps {
  genreId?: number;
  genreName?: string;
  solidColor?: boolean;
  color?: string;
}

export const MovieGenre = ({
  genreId,
  genreName,
  solidColor = false,
  color,
}: MovieGenreProps) => {
  return (
    <div className="flex items-center gap-1">
      <Film size={16} color={solidColor ? color : "#92929D"} />
      <span
        className={`font-medium text-[12px] ${
          !solidColor && "text-text-muted"
        }`}
        style={{ color: solidColor ? color : undefined }}
      >
        {genreId ? formatGenre(genreId) : genreName}
      </span>
    </div>
  );
};
