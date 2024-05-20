import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "../component/ExpandableText";
import GameAttributes from "../component/GameAttributes";
import GameTrailers from "../component/GameTrailers";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailers gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
