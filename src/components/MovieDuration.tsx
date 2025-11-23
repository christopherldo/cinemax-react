import { Clock3 } from "lucide-react";

interface MovieDurationProps {
  runtime: number;
  solidColor?: boolean;
  color?: string;
}

export const MovieDuration = ({
  runtime,
  solidColor = false,
  color,
}: MovieDurationProps) => {
  return (
    <div className="flex items-center gap-1">
      <Clock3 size={16} color={solidColor ? color : "#92929D"} />
      <span
        className={`font-medium text-[12px] ${
          !solidColor && "text-text-muted"
        }`}
        style={{ color: solidColor ? color : undefined }}
      >
        {runtime} Minutes
      </span>
    </div>
  );
};
