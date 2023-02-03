import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
  return (
    <Box textAlign="center" margin="10px 0">
      <Typography>{title}</Typography>
    </Box>
  );
};

export default Header;
