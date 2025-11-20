import { ChevronLeft, Download, Heart, Play, Share } from "lucide-react";
import { MovieReleaseDate } from "../components/MovieReleaseDate";
import { MovieDuration } from "../components/MovieDuration";
import { MovieGenre } from "../components/MovieGenre";
import { MovieRate } from "../components/MovieRate";
import { useNavigate } from "react-router-dom";

export const MoviePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center pt-2 px-6 pb-1 relative">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://picsum.photos/205/287')]">
          <div className="absolute inset-0 bg-[#000000] opacity-76"></div>
          <div className="absolute inset-0 bg-linear-to-b from-[#1f1d2b33] to-dark"></div>
        </div>
        <div className="flex flex-col items-center relative z-10 w-full">
          <div className="flex w-full items-center">
            <button
              className="cursor-pointer"
              type="button"
              title="Back button"
              onClick={() => {
                navigate(-1);
              }}
            >
              <ChevronLeft size={32} color="#FFFFFF" />
            </button>
            <div className="flex-1 flex justify-center">
              <span className="block font-semibold text-white text-[16px] truncate max-w-[50dvw]">
                Spider-Man No Way Home
              </span>
            </div>
            <button
              className="cursor-pointer"
              type="button"
              title="Favorite movie"
            >
              <Heart size={32} color="#FB4141" fill="#FB4141" />
            </button>
          </div>
          <img
            className="mt-6 w-52 h-[287px] rounded-2xl"
            src="https://picsum.photos/205/287"
            alt=""
          />
          <div className="flex gap-3 mt-4">
            <MovieReleaseDate releaseDateString="2021" />
            <div className="w-px bg-dark-grey" />
            <MovieDuration />
            <div className="w-px bg-dark-grey" />
            <MovieGenre genreId={28} />
          </div>
          <div className="mt-2">
            <MovieRate movieVoteAverage={4.5} />
          </div>
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
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-5 px-6 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-[16px] text-white">Story Line</h1>
          <p className="font-normal text-[14px] text-white-grey">
            For the first time in the cinematic history of Spider-Man, our
            friendly neighborhood hero's identity is revealed, bringing his
            Super Hero responsibilities into conflict with his normal life and
            putting those he cares about most at risk.{" "}
            <a className="text-blue-accent" href="#">
              More
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-[16px] text-white">
            Cast and Crew
          </h2>
          <p className="font-normal text-[14px] text-white-grey">
            For the first time in the cinematic history of Spider-Man, our
            friendly neighborhood hero's identity is revealed, bringing his
            Super Hero responsibilities into conflict with his normal life and
            putting those he cares about most at risk.{" "}
            <a className="text-blue-accent" href="#">
              More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
