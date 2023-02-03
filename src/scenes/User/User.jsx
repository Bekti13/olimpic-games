import React from "react";
import { Box } from "@mui/material";

const User = ({ id, name, age, image }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      border="1px solid #000"
      padding="20px"
    >
      <Box
        sx={{
          backgroundImage: `url('/${image}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "200px",
          height: "200px",
        }}
      ></Box>
      <Box>Name of participant: {name}</Box>
      <Box>Age of participant: {age}</Box>
    </Box>
  );
};

export default User;
