import { Heart, Play, Star } from "lucide-react";
import { BackButton2 } from "../components/BackButton2";
import { useWishlistStore } from "../store/wishlistStore";
import { posterURL } from "../utils/posterURL";
import { formatVoteAverage } from "../utils/formatVoteAverage";

export const WishlistPage = () => {
  const wishlistMovies = useWishlistStore((state) => state.wishlistMovies);

  return (
    <div className="pt-4">
      <BackButton2 pageTitle="Wishlist" />

      <div className="p-4 flex flex-col gap-4">
        {wishlistMovies.map((movie) => (
          <div className="p-3 bg-soft flex rounded-2xl gap-4" key={movie.id}>
            <div className="flex-2 flex items-center justify-center">
              <img
                src={posterURL(movie.poster_path)}
                alt="Photo of the movie"
                className="aspect-video rounded-lg overflow-hidden object-cover"
              />
              <div className="size-12.5 absolute bg-white/10 rounded-full flex justify-center items-center">
                <div className="size-10 bg-white/10 rounded-full flex justify-center items-center">
                  <Play className="size-6 fill-white" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 flex-3">
              <span className="text-text-main text-xs font-medium">
                {movie.genres[0].name}
              </span>
              <p className="text-text-main font-semibold">{movie.title}</p>
              <div className="flex gap-2 items-center">
                <span className="text-text-muted text-xs font-medium">
                  Movie
                </span>
                <div className="flex gap-1 flex-1">
                  <Star className="size-4 fill-orange stroke-orange" />
                  <span className="text-xs font-semibold text-orange">
                    {formatVoteAverage(movie.vote_average)}
                  </span>
                </div>
                <Heart className="size-6 -mt-2 fill-red stroke-red" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
