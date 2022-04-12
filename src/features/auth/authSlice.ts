import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api/auth";
import { removeLs, setLs } from "../../ultis/localstogare";

export const signIn = createAsyncThunk("auth/signIn", async (user: any) => {
  try {
    const { data } = await signin(user);
    setLs("user", data);
    notification.success({
      message: "Thông báo",
      description: "Đăng nhập thành công!",
    });
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      notification.error({
        message: err.response.data.messages,
      });
    }
  }
});
export const signOut = createAsyncThunk("auth/signIn", async () => {
  try {
    const navigate = useNavigate();
    removeLs("user");
    navigate("/");
    notification.success({
      message: "Đăng xuất thành công",
    });
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      notification.error({
        message: err.response.data.messages,
      });
    }
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    isSignin: false,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.auth = action.payload;
      state.isSignin = true;
    });
    builder.addCase(signOut.fulfilled, (state: any, action: any) => {
      state.auth = action.payload;
      state.isSignin = false;
    });
  },
});
export default authSlice.reducer;
