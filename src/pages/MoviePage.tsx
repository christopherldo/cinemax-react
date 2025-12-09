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

type RouteParams = { movieId?: string } & Record<string, string | undefined>;

export const MoviePage = () => {
  const { currentTheme } = useTheme();

  const { movieId } = useParams<RouteParams>();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => MovieService.getMovie(movieId),
    staleTime: 1000 * 60 * 60 * 24 * 30, // 1month
  });

  if (isPending) return <Loading isLoading={true} />;
  if (isError) return <ErrorComponent error={error.message} />;

  return (
    <div className="lg:pl-22 lg:flex lg:w-full">
      <div className="flex flex-col ite ms-center pb-1 lg:pb-0 relative lg:w-full lg:static">
        <MovieDetailsBackground posterPath={data.poster_path} />
        <div className="flex flex-col items-center relative z-10 w-full lg:h-full lg:flex-row lg:justify-evenly">
          <div className="pt-2 flex w-full items-center justify-between px-6 lg:fixed lg:pl-14 lg:top-0">
            <BackButton />
            <div className="flex-1 flex justify-center max-w-[50dvw] lg:hidden">
              <MovieTitle movieTitle={data.title} solidColor color="white" />
            </div>
            <button
              className="cursor-pointer lg:hidden"
              type="button"
              title="Favorite movie"
            >
              <Heart size={32} className="text-red fill-red" />
            </button>
          </div>
          <div>
            <div className="mt-6 w-52 mx-auto lg:w-auto lg:min-h-90 lg:max-h-[70dvh] aspect-2/3 rounded-2xl overflow-hidden">
              <MoviePoster
                moviePosterPath={data.poster_path}
                movieTitle={data.title}
              />
            </div>
            <div className="flex gap-3 mt-4 lg:hidden">
              <MovieReleaseDate
                releaseDateString={data.release_date}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieDuration
                runtime={data.runtime}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieGenre
                genreName={data.genres[0].name}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
            </div>
            <div className="mt-2 flex justify-center lg:hidden">
              <MovieRate
                movieVoteAverage={data.vote_average}
                solidColor={currentTheme === "light"}
              />
            </div>
            <MovieDetailsActions />
          </div>
          <div className="hidden lg:block flex-1 max-w-[50dvw]">
            <div className="flex gap-4 justify-center">
              <div className="hidden lg:flex lg:flex-col text-5xl font-bold">
                {data.title}
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
                releaseDateString={data.release_date}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieDuration
                runtime={data.runtime}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieGenre
                genreName={data.genres[0].name}
                solidColor={currentTheme === "light"}
                color="#252836"
              />
              <div className="w-px bg-dark-background dark:bg-line" />
              <MovieRate
                movieVoteAverage={data.vote_average}
                solidColor={currentTheme === "light"}
              />
            </div>
            <div className="flex flex-col gap-6 mt-5 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[16px] text-text-main">
                  Story Line
                </h1>
                <MovieOverview
                  homepage={data.homepage}
                  overview={data.overview}
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
          <MovieOverview homepage={data.homepage} overview={data.overview} />
        </div>
      </div>
    </div>
  );
};
