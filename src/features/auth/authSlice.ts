import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin } from "../../api/auth";
import { setLs } from "../../ultis/localstogare";

export const signIn = createAsyncThunk("auth/signIn", async (user: any) => {
  const { data } = await signin(user);
  setLs("user", data);
  return data;
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.users = action.payload;
    });
  },
});
export default authSlice.reducer;
