import type { Movie } from "./Movie";

export interface MovieSearch {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
