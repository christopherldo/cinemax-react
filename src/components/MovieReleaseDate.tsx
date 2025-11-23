import { CalendarDays } from "lucide-react";
import { formatReleaseDate } from "../utils/formatReleaseDate";

interface MovieReleaseDateProps {
  releaseDateString: string;
  solidColor?: boolean;
  color?: string;
}

export const MovieReleaseDate = ({
  releaseDateString,
  solidColor = false,
  color,
}: MovieReleaseDateProps) => {
  return (
    <div className="flex items-center gap-1">
      <CalendarDays size={16} color={solidColor ? color : "#92929D"} />
      <span
        className={`font-medium text-[12px] ${
          !solidColor && "text-text-muted"
        }`}
        style={{ color: solidColor ? color : undefined }}
      >
        {formatReleaseDate(releaseDateString)}
      </span>
    </div>
  );
};
