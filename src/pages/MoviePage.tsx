import { Heart } from "lucide-react";
import { MovieReleaseDate } from "../components/MovieReleaseDate";
import { MovieDuration } from "../components/MovieDuration";
import { MovieGenre } from "../components/MovieGenre";
import { MovieRate } from "../components/MovieRate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Error as ErrorComponent } from "../components/Error";
import type { MovieWithDetails } from "../types/Movie";
import { movieService } from "../services/movieService";
import { MoviePoster } from "../components/MoviePoster";
import { MovieDetailsBackground } from "../components/MovieDetailsBackground";
import { BackButton } from "../components/BackButton";
import { MovieTitle } from "../components/MovieTitle";
import { MovieOverview } from "../components/MovieOverview";
import { MovieDetailsActions } from "../components/MovieDetailsActions";

type RouteParams = { movieId?: string } & Record<string, string | undefined>;

export const MoviePage = () => {
  const { movieId } = useParams<RouteParams>();

  const [movie, setMovie] = useState<MovieWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | string[]>("");

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setIsLoading(true);

      if (!movieId) return;

      try {
        const data = await movieService.details(Number(movieId));
        if (!ignore) setMovie(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error ocurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [movieId]);

  if (isLoading) return <Loading isLoading={true} />;
  if (error) return <ErrorComponent error={error} />;
  if (!movie) return null;

  return (
    <div>
      <div className="flex flex-col items-center pt-2 px-6 pb-1 relative">
        <MovieDetailsBackground posterPath={movie.poster_path} />
        <div className="flex flex-col items-center relative z-10 w-full">
          <div className="flex w-full items-center justify-between">
            <BackButton />
            <div className="flex-1 flex justify-center max-w-[50dvw]">
              <MovieTitle movieTitle={movie.title} />
            </div>
            <button
              className="cursor-pointer"
              type="button"
              title="Favorite movie"
            >
              <Heart size={32} color="#FB4141" fill="#FB4141" />
            </button>
          </div>
          <div className="mt-6 w-52 h-[287px] rounded-2xl overflow-hidden">
            <MoviePoster
              moviePosterPath={movie?.poster_path}
              movieTitle={movie?.title}
            />
          </div>
          <div className="flex gap-3 mt-4">
            <MovieReleaseDate releaseDateString={movie?.release_date} />
            <div className="w-px bg-dark-grey" />
            <MovieDuration runtime={movie?.runtime} />
            <div className="w-px bg-dark-grey" />
            <MovieGenre genreName={movie?.genres[0].name} />
          </div>
          <div className="mt-2">
            <MovieRate movieVoteAverage={movie?.vote_average} />
          </div>
          <MovieDetailsActions />
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-5 px-6 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-[16px] text-white">Story Line</h1>
          <MovieOverview homepage={movie.homepage} overview={movie.overview} />
        </div>
      </div>
    </div>
  );
};
