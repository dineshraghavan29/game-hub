import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game, Games } from "./GameGrid.types";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient
      .get<Games>("/games", { signal: controller.signal })
      .then((res) => {
        setisLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setisLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
