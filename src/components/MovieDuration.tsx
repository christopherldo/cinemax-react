import { Clock3 } from "lucide-react";

interface MovieDurationProps {
  runtime: number;
}

export const MovieDuration = ({ runtime }: MovieDurationProps) => {
  return (
    <div className="flex items-center gap-1">
      <Clock3 size={16} color="#92929D" />
      <span className="font-medium text-grey text-[12px]">
        {runtime} Minutes
      </span>
    </div>
  );
};
