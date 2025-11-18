import { CalendarDays } from "lucide-react";
import { formatReleaseDate } from "../utils/formatReleaseDate";

interface MovieReleaseDateProps {
  releaseDateString: string;
}

export const MovieReleaseDate = ({
  releaseDateString,
}: MovieReleaseDateProps) => {
  return (
    <div className="flex items-center gap-1">
      <CalendarDays size={16} color="#92929D" />
      <span className="font-medium text-text-muted text-[12px]">
        {formatReleaseDate(releaseDateString)}
      </span>
    </div>
  );
};
