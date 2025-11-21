import type { Genre } from "./Genre";
import type { ProductionCompany } from "./ProductionCompany";
import type { ProductionCountry } from "./ProductionCountry";
import type { SpokenLanguage } from "./SpokenLanguage";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
}

export interface MovieWithDetails extends Omit<Movie, "genre_ids"> {
  belongs_to_collection: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}
