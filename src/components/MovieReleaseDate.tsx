import { CalendarDays } from "lucide-react";

export const MovieReleaseDate = () => {
  return (
    <div className="flex items-center gap-1">
      <CalendarDays size={16} color="#92929D" />
      <span className="font-medium text-text-muted text-[12px]">2021</span>
    </div>
  );
};
