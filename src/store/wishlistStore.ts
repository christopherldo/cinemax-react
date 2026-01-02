import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { MovieWithDetails } from "../types/Movie";

interface State {
  wishlistMovies: MovieWithDetails[];
  wishlistMovieIds: number[];
}

interface Actions {
  addMovieToWishlist: (movie: MovieWithDetails) => void;
  removeMovieFromTheWishlist: (movie: MovieWithDetails) => void;
}

export const useWishlistStore = create<State & Actions>()(
  immer((set, get) => ({
    wishlistMovies: [],
    wishlistMovieIds: [],
    addMovieToWishlist(movie) {
      set((state) => {
        state.wishlistMovies.push(movie);
        state.wishlistMovieIds.push(movie.id);
      });
    },
    removeMovieFromTheWishlist(movie) {
      const idToBeRemoved = movie.id;

      const newWishlistMovieArray = get().wishlistMovies.filter(
        (movie) => movie.id !== idToBeRemoved
      );
      const newWishlistMovieIdsArray = get().wishlistMovieIds.filter(
        (wishlistedIds) => wishlistedIds !== idToBeRemoved
      );

      set((state) => {
        state.wishlistMovies = newWishlistMovieArray;
        state.wishlistMovieIds = newWishlistMovieIdsArray;
      });
    },
  }))
);
