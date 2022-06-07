import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { AxiosError } from "axios";
import { signin } from "../api/auth";
import { removeLs, setLs } from "../../shared/ultis/localstogare";
export const signIn = createAsyncThunk("auth/signIn", async (user: any) => {
  try {
    const {data, status} = await signin(user);
    console.log(data);
    if(status === 200) {
      setLs("user", data);
      notification.success({
        message: "Thông báo",
        description: "Đăng nhập thành công!",
      });
    }
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      notification.error({
        message: err.response.data.messages,
      });
    }
  }
});
// export const signOut = createAsyncThunk("auth/signIn", async () => {
//   try {
    
//   } catch (error) {
//     const err = error as AxiosError;
//     if (err.response) {
//       notification.error({
//         message: err.response.data.messages,
//       });
//     }
//   }
// });
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    isSignin: false,
  },
  reducers: {
    signOut(state) {
      removeLs("user");
      state.isSignin = false;
      notification.success({
        message: "Đăng xuất thành công",
      });
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.auth = action.payload;
      state.isSignin = true;
    });
  },
});
export const { signOut } = authSlice.actions
export default authSlice.reducer;
