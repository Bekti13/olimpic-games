import React from "react";
import { Box } from "@mui/material";
import { USERS } from "../../data/data";
import User from "../User/User";
import Header from "../../components/Header";
import FormUser from "../../components/FormUser/FormUser";
import { useSelector } from "react-redux";

const Users = () => {
  const usersBox = useSelector((state)=> state.users)

  return (
    <>
      <Header title="Participants" />
      <Box
        display="flex"
        justifyContent="space-between"
        maxWidth="75%"
        margin="0 auto"
      >
        {usersBox.map(user => (
          <User key={user.id} name={user.name} age={user.age} image={user.image} />
        ))}
      </Box>
      <FormUser />
    </>
  );
};

export default Users;
