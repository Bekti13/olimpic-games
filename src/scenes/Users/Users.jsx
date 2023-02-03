import React from "react";
import { Box } from "@mui/material";
import { USERS } from "../../data/data";
import User from "../User/User";
import Header from "../../components/Header";
import FormUser from "../../components/FormUser/FormUser";

const Users = () => {
  const usersBox = USERS.map((user) => (
    <User key={user.id} name={user.name} age={user.age} image={user.image} />
  ));

  return (
    <>
      <Header title="Participants" />
      <Box
        display="flex"
        justifyContent="space-between"
        maxWidth="75%"
        margin="0 auto"
      >
        {usersBox}
      </Box>
      <FormUser />
    </>
  );
};

export default Users;
