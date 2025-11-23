interface MovieOverviewProps {
  overview: string;
  homepage: string;
}

export const MovieOverview = ({ overview, homepage }: MovieOverviewProps) => {
  return (
    <p className="font-normal text-[14px] text-text-main">
      {overview}{" "}
      <a className="text-accent" href={homepage} target="_blank">
        More
      </a>
    </p>
  );
};
