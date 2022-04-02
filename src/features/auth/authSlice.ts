import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
import { signin } from "../../api/auth";
import { removeLs, setLs } from "../../ultis/localstogare";

export const signIn = createAsyncThunk("auth/signIn", async (user: any) => {
  try {
    const { data } = await signin(user);
    setLs("user", data);
  } catch (error) {
    console.log(error);
  }
});
// export const signOut = createAsyncThunk("auth/signOut", (user: any) => {
 
// });
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    isSignin: false
  },
  reducers: {
    signOut: state =>  {
      debugger
      removeLs('user')
      state.isSignin = false
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.auth = action.payload;
      state.isSignin = true;
      console.log(state.isSignin);
      
    });
  },
});
export const { signOut } = authSlice.actions
export default authSlice.reducer;
