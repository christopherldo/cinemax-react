import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | string[]>("");
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await fetch(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          },
        });

        const json = await data.json();

        if (!ignore) setData(json as T);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error ocurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { isLoading, error, data };
};
