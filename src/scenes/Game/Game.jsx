import { Box } from "@mui/material";
import React from "react";

const Game = ({ id, name }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      border="1px solid #000"
      padding="20px"
      flex="1 1 25%"
    >
      {name}
    </Box>
  );
};

export default Game;
