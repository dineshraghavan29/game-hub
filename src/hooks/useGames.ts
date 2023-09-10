import { Game } from "./GameGrid.types";
import { Genre } from "./Genres.type";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
