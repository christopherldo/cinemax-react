interface MoviePoster {
  moviePosterPath: string;
  movieTitle: string;
}

export const MoviePoster = ({ moviePosterPath, movieTitle }: MoviePoster) => {
  return (
    <img
      className="block w-full h-full "
      src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`}
      alt={`${movieTitle} movie poster`}
      draggable={false}
    />
  );
};
