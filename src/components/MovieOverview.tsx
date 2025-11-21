interface MovieOverviewProps {
  overview: string;
  homepage: string;
}

export const MovieOverview = ({ overview, homepage }: MovieOverviewProps) => {
  return (
    <p className="font-normal text-[14px] text-white-grey">
      {overview}{" "}
      <a className="text-blue-accent" href={homepage} target="_blank">
        More
      </a>
    </p>
  );
};
