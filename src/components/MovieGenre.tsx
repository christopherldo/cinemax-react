import { formatGenre } from "../utils/formatGenre";

interface MovieGenreProps {
  genreId: number;
}

export const MovieGenre = ({ genreId }: MovieGenreProps) => {
  return (
    <span className="font-medium text-grey text-[12px]">
      {formatGenre(genreId)}
    </span>
  );
};
