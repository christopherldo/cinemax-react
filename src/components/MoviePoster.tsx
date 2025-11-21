import { posterURL } from "../utils/posterURL";

interface MoviePoster {
  moviePosterPath: string;
  movieTitle: string;
}

export const MoviePoster = ({ moviePosterPath, movieTitle }: MoviePoster) => {
  return (
    <img
      className="block w-full h-full "
      src={`${posterURL(moviePosterPath)}`}
      alt={`${movieTitle} movie poster`}
      draggable={false}
    />
  );
};
