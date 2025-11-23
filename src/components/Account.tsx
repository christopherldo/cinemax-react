import { FavoriteButton } from "./FavoriteButton";
import { ThemeToggle } from "./ThemeToggle";

export const Account = () => {
  return (
    <div className="flex items-center gap-4 mx-8 self-center mt-4 w-full max-w-md px-4">
      <img
        src="https://picsum.photos/40"
        alt="Profile picture"
        className="rounded-full"
      />
      <div className="flex-1 flex flex-col gap-1 items-start">
        <h1 className="font-semibold text-base text-text-main">
          Hello, Christopher
        </h1>
        <h2 className="font-medium text-[12px] text-text-muted">
          Let's stream your favorite movie
        </h2>
      </div>
      <ThemeToggle />
      <FavoriteButton />
    </div>
  );
};
