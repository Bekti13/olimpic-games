import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../../data/data";

const userSlice = createSlice({
  name: "users",
  initialState: USERS,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
