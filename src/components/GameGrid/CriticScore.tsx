import { Badge } from "@chakra-ui/react";
import { CriticScoreProps } from "./CriticScoreProps";

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
