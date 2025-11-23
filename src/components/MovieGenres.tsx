import { MovieGenre } from "./MovieGenre";

interface MovieGenresProps {
  genreIds: number[];
}

export const MovieGenres = ({ genreIds }: MovieGenresProps) => {
  return (
    <div className="flex items-center gap-1">
      {genreIds.length > 0 && <MovieGenre genreId={genreIds[0]} />}
      <div className="h-full w-px bg-line" />
      <span className="font-medium text-text-main text-[12px]">Movie</span>
    </div>
  );
};
