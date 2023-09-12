import { Platform } from "./hooks/GameGrid.types";
import { Genre } from "./hooks/Genres.type";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
};
