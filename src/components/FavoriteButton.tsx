import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const FavoriteButton = () => {
  return (
    <Link to="/wishlist">
      <button
        type="button"
        className="w-8 h-8 rounded-xl bg-soft flex justify-center items-center cursor-pointer"
        title="Favorite movies"
      >
        <Heart size={24} className="text-red fill-red" />
      </button>
    </Link>
  );
};
