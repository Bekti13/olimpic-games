import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

const FormUser = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box width="300px" height="300px" margin="20px auto">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          sx={{ margin: "10px 0" }}
        />
        <TextField
          fullWidth
          id="age"
          name="age"
          label="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          sx={{ margin: "10px 0" }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormUser;
