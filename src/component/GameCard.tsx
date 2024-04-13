import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width='300px' borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
