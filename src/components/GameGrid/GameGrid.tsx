import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../../hooks/Genres.type";
import { Platform } from "../../hooks/GameGrid.types";

type GameGridProps = {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
};

const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data, error, isLoading } = useGames({
    selectedGenre,
    selectedPlatform,
  });
  const skeletonList = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingY={5}
        spacing={3}
      >
        {isLoading &&
          skeletonList.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
