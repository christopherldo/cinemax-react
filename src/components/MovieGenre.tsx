import { Film } from "lucide-react";

export const MovieGenre = () => {
  return (
    <div className="flex items-center gap-1">
      <Film size={16} color="#92929D" />
      <span className="font-medium text-[#92929D] text-[12px]">Action</span>
      <div className="h-full w-px bg-[#696974]" />
      <span className="font-medium text-white text-[12px]">Movie</span>
    </div>
  );
};
