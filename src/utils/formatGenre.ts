import { GENRES } from "./genres";

export const formatGenre = (genreId: number) => {
  const genre = GENRES.find((genre) => genre?.id === genreId);

  return genre?.name;
};
