import { useEffect, useState } from "react";
import { Genre, Genres } from "./Genres.type";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient
      .get<Genres>("/genres", { signal: controller.signal })
      .then((res) => {
        setisLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setisLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
