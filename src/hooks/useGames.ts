import { Game, Platform } from "./GameGrid.types";
import { Genre } from "./Genres.type";
import useData from "./useData";

type UseGamesProps = {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
};

const useGames = ({ selectedGenre, selectedPlatform }: UseGamesProps) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
