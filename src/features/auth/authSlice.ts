import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin } from "../../api/auth";
import { setLs } from "../../ultis/localstogare";

export const signIn = createAsyncThunk("auth/signIn", async (user: any) => {
  try {
    const { data } = await signin(user);
    setLs("user", data);
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    isSignin: false
  },
  reducers: {
  },
  extraReducers: (builder: any) => {
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.auth = action.payload;
      state.isSignin = true;
      console.log(state.isSignin);
      
    });
  },
});
export default authSlice.reducer;
