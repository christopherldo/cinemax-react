interface MovieTitleProps {
  movieTitle: string;
}

export const MovieTitle = ({ movieTitle }: MovieTitleProps) => {
  return (
    <span className="block font-semibold text-[16px] truncate text-white">
      {movieTitle}
    </span>
  );
};
