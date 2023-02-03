import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import { Box, Button, unstable_useId } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/users/usersSlice";
import { v4 as uuid } from "uuid";

const FormUser = () => {

  const [user, setUser] = useState({
    name: '',
    age: ''
  })

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({ ...user, id: uuid() }))
    
  }
  

  return (
    <Box width="300px" height="300px" margin="20px auto">
      <form onSubmit={handleSubmit}>
        <input
          
          id="name"
          name="name"
          label="name"
          value={user.name}
          onChange={handleChange}
          sx={{ margin: "10px 0" }}
        />
        <input
          
          id="age"
          name="age"
          label="age"
          value={user.age}
          onChange={handleChange}
          sx={{ margin: "10px 0" }}
        />
        <button  type="submit">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default FormUser;
