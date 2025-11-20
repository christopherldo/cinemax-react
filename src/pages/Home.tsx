import { Account } from "../components/Account";
import { MovieList } from "../components/MovieList";

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Account />
      <MovieList />
    </div>
  );
};
