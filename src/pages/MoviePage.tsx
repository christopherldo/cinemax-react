import { Heart } from "lucide-react";
import { MovieReleaseDate } from "../components/MovieReleaseDate";
import { MovieDuration } from "../components/MovieDuration";
import { MovieGenre } from "../components/MovieGenre";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Error as ErrorComponent } from "../components/Error";
import { MoviePoster } from "../components/MoviePoster";
import { MovieDetailsBackground } from "../components/MovieDetailsBackground";
import { BackButton } from "../components/BackButton";
import { MovieOverview } from "../components/MovieOverview";
import { MovieDetailsActions } from "../components/MovieDetailsActions";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieTitle } from "../components/MovieTitle";
import { MovieRate } from "../components/MovieRate";
import { useTheme } from "../context/ThemeContext/useTheme";

type RouteParams = { movieId?: string } & Record<string, string | undefined>;

export const MoviePage = () => {
  const { currentTheme } = useTheme();

  const { movieId } = useParams<RouteParams>();
  const { error, isLoading, movie } = useMovieDetails(movieId);

  if (isLoading) return <Loading isLoading={true} />;
  if (error) return <ErrorComponent error={error} />;
  if (!movie) return null;

  return (
    <div>
      <div className="flex flex-col items-center pb-1 relative">
        <MovieDetailsBackground posterPath={movie.poster_path} />
        <div className="flex flex-col items-center relative z-10 w-full">
          <div className="pt-2 flex w-full items-center justify-between px-6">
            <BackButton />
            <div className="flex-1 flex justify-center max-w-[50dvw]">
              <MovieTitle movieTitle={movie.title} solidColor color="white" />
            </div>
            <button
              className="cursor-pointer"
              type="button"
              title="Favorite movie"
            >
              <Heart size={32} className="text-red fill-red" />
            </button>
          </div>
          <div className="mt-6 w-52 h-[287px] rounded-2xl overflow-hidden">
            <MoviePoster
              moviePosterPath={movie?.poster_path}
              movieTitle={movie?.title}
            />
          </div>
          <div className="flex gap-3 mt-4">
            <MovieReleaseDate
              releaseDateString={movie?.release_date}
              solidColor={currentTheme === "light"}
              color="#252836"
            />
            <div className="w-px bg-dark-background dark:bg-line" />
            <MovieDuration
              runtime={movie?.runtime}
              solidColor={currentTheme === "light"}
              color="#252836"
            />
            <div className="w-px bg-dark-background dark:bg-line" />
            <MovieGenre
              genreName={movie?.genres[0].name}
              solidColor={currentTheme === "light"}
              color="#252836"
            />
          </div>
          <div className="mt-2">
            <MovieRate
              movieVoteAverage={movie?.vote_average}
              solidColor={currentTheme === "light"}
            />
          </div>
          <MovieDetailsActions />
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-5 px-6 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-[16px] text-text-main">
            Story Line
          </h1>
          <MovieOverview homepage={movie.homepage} overview={movie.overview} />
        </div>
      </div>
    </div>
  );
};
