import { Star } from "lucide-react";
import { formatVoteAverage } from "../utils/formatVoteAverage";

interface MovieRateProps {
  movieVoteAverage: number;
}

export const MovieRate = ({ movieVoteAverage }: MovieRateProps) => {
  return (
    <div className="absolute flex items-center gap-1 top-2 left-2 py-1 px-2 bg-[#25283652] rounded-lg backdrop-blur-[20px]">
      <Star size={16} color="#FF8700" fill="#FF8700" />
      <span className="font-semibold text-[12px] text-orange">
        {formatVoteAverage(movieVoteAverage)}
      </span>
    </div>
  );
};
