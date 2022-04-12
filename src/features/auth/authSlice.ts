import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { AxiosError } from "axios";
import { signin } from "../../api/auth";
import { setLs } from "../../ultis/localstogare";

export const signIn = createAsyncThunk("auth/signIn", async (user: any) => {
  try {
    const { data } = await signin(user);
    setLs("user", data);
    notification.success({
      message: "Thông báo",
      description: "Đăng nhập thành công!",
    });
  } catch(error) {
    const err = error as AxiosError
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
    isSignin: false
  },
  reducers: {
  },
  extraReducers: (builder: any) => {
    builder.addCase(signIn.fulfilled, (state: any, action: any) => {
      state.auth = action.payload;
      state.isSignin = true;
    });
  },
});
export default authSlice.reducer;
