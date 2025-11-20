import { MovieGenre } from "./MovieGenre";

interface MovieGenresProps {
  genreIds: number[];
}

export const MovieGenres = ({ genreIds }: MovieGenresProps) => {
  return (
    <div className="flex items-center gap-1">
      {genreIds.length > 0 && <MovieGenre genreId={genreIds[0]} />}
      <div className="h-full w-px bg-dark-grey" />
      <span className="font-medium text-white text-[12px]">Movie</span>
    </div>
  );
};
