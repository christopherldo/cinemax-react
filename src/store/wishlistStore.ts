import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { MovieWithDetails } from "../types/Movie";
import { persist } from "zustand/middleware";

interface State {
  wishlistMovies: MovieWithDetails[];
}

interface Actions {
  addMovieToWishlist: (movieToBeAdded: MovieWithDetails) => void;
  removeMovieFromTheWishlist: (movieId: number) => void;
  checkIsWishlisted: (searchingId: number) => boolean;
}

export const useWishlistStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      wishlistMovies: [],
      wishlistMovieIds: [],
      addMovieToWishlist(movieToBeAdded) {
        const exists = get().wishlistMovies.some(
          (movie) => movie.id === movieToBeAdded.id
        );

        if (exists === false) {
          set((state) => {
            state.wishlistMovies.push(movieToBeAdded);
          });
        }
      },
      removeMovieFromTheWishlist(movieId) {
        const index = get().wishlistMovies.findIndex(
          (movie) => movie.id === movieId
        );

        if (index !== -1) {
          set((state) => {
            state.wishlistMovies.splice(index, 1);
          });
        }
      },
      checkIsWishlisted(searchingId) {
        return get().wishlistMovies.some((movie) => movie.id === searchingId);
      },
    })),
    {
      name: "wishlist-storage",
    }
  )
);
