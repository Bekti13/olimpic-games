import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { GAMES } from "../../data/data";
import Game from "../Game/Game";
const Games = () => {
  const games = GAMES.map((game) => <Game key={game.id} name={game.name} />);

  return (
    <>
      <Header title="Games" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap="20px"
        maxWidth="75%"
        margin="0 auto"
      >
        {games}
      </Box>
    </>
  );
};

export default Games;
