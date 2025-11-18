import { Clock3 } from "lucide-react";

export const MovieDuration = () => {
  return (
    <div className="flex items-center gap-1">
      <Clock3 size={16} color="#92929D" />
      <span className="font-medium text-[#92929D] text-[12px]">
        148 Minutes
      </span>
      <div className="w-[43px] h-5 border border-[#12CDD9] rounded-[3px] flex justify-center items-center font-medium text-[12px] text-[#12CDD9]">
        PG-13
      </div>
    </div>
  );
};
