import { Clock3 } from "lucide-react";

export const MovieDuration = () => {
  return (
    <div className="flex items-center gap-1">
      <Clock3 size={16} color="#92929D" />
      <span className="font-medium text-text-muted text-[12px]">
        148 Minutes
      </span>
      <div className="w-10 h-5 border border-accent rounded-[3px] flex justify-center items-center font-medium text-[12px] text-accent">
        PG-13
      </div>
    </div>
  );
};
