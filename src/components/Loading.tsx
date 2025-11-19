interface LoadingProps {
  isLoading: boolean;
}

export const Loading = ({ isLoading }: LoadingProps) => {
  return isLoading ? (
    <p className="col-span-full text-center">Carregando filmes...</p>
  ) : null;
};
