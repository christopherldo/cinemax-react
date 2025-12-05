import { Account } from "../components/Account";
import { MovieList } from "../components/MovieList";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full lg:pl-22 lg:pr-2">
      <Account />
      <MovieList />
    </div>
  );
};
