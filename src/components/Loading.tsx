interface LoadingProps {
  isLoading: boolean;
}

export const Loading = ({ isLoading }: LoadingProps) => {
  return isLoading ? <p>Carregando filmes...</p> : null;
};
