import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { GameCardProps } from "./GameCard.types";

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
