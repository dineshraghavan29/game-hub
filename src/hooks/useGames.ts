import { Game } from "./GameGrid.types";
import useData from "./useData";

const useGames = () => useData<Game>("/games");

export default useGames;
