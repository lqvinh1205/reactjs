import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create } from "../../api/users";

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (user: any) => {
      console.log(3);
      
    const { data } = await create(user)
    return data
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    values: [],
  },
  reducers: {

  },
  extraReducers: (builder: any) => {
    builder.addCase(addUsers.fulfilled, (state: any, action: any) => {
      state.values = action.payload;
    });
  },
});

export default userSlice.reducer;
