import { formatError } from "../utils/formatError";

interface ErrorProps {
  error: string | string[];
}

export const Error = ({ error }: ErrorProps) => {
  return error.length > 0 ? (
    <p className="text-red-400 col-span-full text-center">
      Ocorreu um erro: {formatError(error)}
    </p>
  ) : null;
};
