import { Download, Play, Share } from "lucide-react";

export const MovieDetailsActions = () => {
  return (
    <div className="flex gap-4 mt-6">
      <button
        type="button"
        className="h-12 flex gap-2 items-center bg-orange rounded-4xl px-6 cursor-pointer"
      >
        <Play size={24} fill="#FFFFFF" />
        <span className="block -mt-px font-medium text-[16px]">Play</span>
      </button>
      <button
        type="button"
        title="Download movie"
        className="w-12 h-12 flex justify-center items-center bg-soft rounded-full cursor-pointer"
      >
        <Download size={24} color="#FF8700" />
      </button>
      <button
        type="button"
        title="Download movie"
        className="w-12 h-12 flex justify-center items-center bg-soft rounded-full cursor-pointer"
      >
        <Share size={20} color="#12CDD9" />
      </button>
    </div>
  );
};
