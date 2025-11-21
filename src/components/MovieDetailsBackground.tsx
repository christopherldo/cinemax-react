import { posterURL } from "../utils/posterURL";

interface MovieDetailsBackgroundProps {
  posterPath: string;
}

export const MovieDetailsBackground = ({
  posterPath,
}: MovieDetailsBackgroundProps) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-top"
      style={{
        backgroundImage: posterPath
          ? `url(${posterURL(posterPath)})`
          : undefined,
      }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-76"></div>
      <div className="absolute inset-0 bg-linear-to-b from-[#1f1d2b33] to-dark"></div>
    </div>
  );
};
