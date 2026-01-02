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
import { MovieTitle } from "../components/MovieTitle";
import { MovieRate } from "../components/MovieRate";
import { useTheme } from "../context/ThemeContext/useTheme";
import { useQuery } from "@tanstack/react-query";
import MovieService from "../services/MovieService";
import { useWishlistStore } from "../store/wishlistStore";

type RouteParams = { movieId?: string } & Record<string, string | undefined>;

export const MoviePage = () => {
  const { addMovieToWishlist, checkIsWishlisted, removeMovieFromTheWishlist } =
    useWishlistStore();
  const { currentTheme } = useTheme();

  const { movieId } = useParams<RouteParams>();

  const {
    isPending,
    isError,
    data: movie,
    error,
  } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => MovieService.getMovie(movieId),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24, //24h
  });

  if (isPending) return <Loading isLoading={true} />;
  if (isError) return <ErrorComponent error={error.message} />;

  const handleClickOnAddToWishlistButton = () => {
    if (checkIsWishlisted(movie.id) === false) {
      addMovieToWishlist(movie);
    } else {
      removeMovieFromTheWishlist(movie.id);
    }
  };

  return (
    <div className="lg:pl-22 lg:flex lg:w-full">
      <div className="flex flex-col ite ms-center pb-1 lg:pb-0 relative lg:w-full lg:static">
        <MovieDetailsBackground posterPath={movie.poster_path} />
        <div className="flex flex-col items-center relative z-10 w-full lg:h-full lg:flex-row lg:justify-evenly">
          <div className="pt-2 flex w-full items-center justify-between px-6 lg:fixed lg:pl-14 lg:top-0">
            <BackButton />
            <div className="flex-1 flex justify-center max-w-[50dvw] lg:hidden">
              <MovieTitle movieTitle={movie.title} solidColor color="white" />
            </div>
            <button
              className="cursor-pointer lg:hidden"
              type="button"
              title="Favorite movie"
              onClick={handleClickOnAddToWishlistButton}
            >
              <Heart
                data-iswhislisted={checkIsWishlisted(movie.id)}
                size={32}
                className="fill-none data-[iswhislisted=true]:fill-red data-[iswhislisted=true]:text-red"
              />
            </button>
          </div>
          <div>
            <div className="mt-6 w-52 mx-auto lg:w-auto lg:min-h-90 lg:max-h-[70dvh] aspect-2/3 rounded-2xl overflow-hidden">
              <MoviePoster
                moviePosterPath={movie.poster_path}
                movieTitle={movie.title}
              />
            </div>
            <div className="flex gap-3 mt-4 lg:hidden">
              <MovieReleaseDate
                releaseDateString={movie.release_date}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieDuration
                runtime={movie.runtime}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieGenre
                genreName={movie.genres[0].name}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
            </div>
            <div className="mt-2 flex justify-center lg:hidden">
              <MovieRate
                movieVoteAverage={movie.vote_average}
                solidColor={currentTheme === "light"}
              />
            </div>
            <MovieDetailsActions />
          </div>
          <div className="hidden lg:block flex-1 max-w-[50dvw] bg-background dark:bg-transparent p-4 rounded-2xl">
            <div className="flex gap-4 justify-center">
              <div className="hidden lg:flex lg:flex-col text-5xl font-bold text-text-main">
                {movie.title}
              </div>
              <button
                className="hidden cursor-pointer -mt-2 lg:block"
                type="button"
                title="Favorite movie"
              >
                <Heart size={48} className="text-red fill-red" />
              </button>
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              <MovieReleaseDate
                releaseDateString={movie.release_date}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieDuration
                runtime={movie.runtime}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieGenre
                genreName={movie.genres[0].name}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieRate
                movieVoteAverage={movie.vote_average}
                solidColor={currentTheme === "light"}
              />
            </div>
            <div className="flex flex-col gap-6 mt-5 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[16px] text-text-main">
                  Story Line
                </h1>
                <MovieOverview
                  homepage={movie.homepage}
                  overview={movie.overview}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-5 px-6 items-center lg:hidden">
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
