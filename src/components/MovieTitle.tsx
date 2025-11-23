interface MovieTitleProps {
  movieTitle: string;
  solidColor?: boolean;
  color?: string;
}

export const MovieTitle = ({
  movieTitle,
  solidColor = false,
  color,
}: MovieTitleProps) => {
  return (
    <span
      className={`block font-semibold text-[16px] truncate max-w-8/10 ${
        !solidColor && "text-text-main"
      }`}
      style={{ color: solidColor ? color : undefined }}
    >
      {movieTitle}
    </span>
  );
};
