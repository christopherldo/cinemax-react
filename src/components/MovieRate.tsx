import { Star } from "lucide-react";
import { formatVoteAverage } from "../utils/formatVoteAverage";

interface MovieRateProps {
  movieVoteAverage: number;
  solidColor?: boolean;
}

export const MovieRate = ({
  movieVoteAverage,
  solidColor = false,
}: MovieRateProps) => {
  return (
    <div
      className={`flex items-center gap-1 py-1 px-2 rounded-lg ${
        solidColor ? "bg-[#252836]" : "backdrop-blur-[20px] bg-[#25283652]"
      }`}
    >
      <Star size={16} color="#FF8700" fill="#FF8700" />
      <span className="font-semibold text-[12px] text-orange">
        {formatVoteAverage(movieVoteAverage)}
      </span>
    </div>
  );
};
