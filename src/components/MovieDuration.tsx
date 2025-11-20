import { Clock3 } from "lucide-react";

export const MovieDuration = () => {
  return (
    <div className="flex items-center gap-1">
      <Clock3 size={16} color="#92929D" />
      <span className="font-medium text-grey text-[12px]">148 Minutes</span>
    </div>
  );
};
