import { Box } from "@chakra-ui/react";
import { GameCardContainerProps } from "./GameCardContainer.types";

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width="250px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
