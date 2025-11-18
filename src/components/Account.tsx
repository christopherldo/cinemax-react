import { Heart } from "lucide-react";

export const Account = () => {
  return (
    <div className="flex items-center gap-4 mx-8 self-center mt-13 min-w-[327px]">
      <img
        src="https://picsum.photos/40"
        alt="Profile picture"
        className="rounded-full"
      />
      <div className="flex-1 flex flex-col gap-1 items-start">
        <h1 className="font-semibold text-base text-white">
          Hello, Christopher
        </h1>
        <h2 className="font-medium text-[12px] text-[#92929D]">
          Let's stream your favorite movie
        </h2>
      </div>
      <button
        type="button"
        className="w-8 h-8 rounded-xl bg-[#252836] ml-[41px] flex justify-center items-center"
      >
        {/* Insert a heart icon later */}
        <Heart size={24} color="#FB4141" fill="#FB4141" />
      </button>
    </div>
  );
};
