import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, read, remove, update } from "../api/users";

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (user: any) => {
    const { data } = await create(user);
    return data;
  }
);
// export const signupUser = createAsyncThunk(
//   "users/addUsers",
//   async (user: any) => {
//     const { data } = await create(user);
//     return data;
//   }
// );
export const readUsers = createAsyncThunk(
  "users/readUsers",
  async (id: any) => {
    const { data } = await read(id);
    return data;
  }
);
export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async (user: any) => {
    const { data } = await update(user);
    return data;
  }
);
export const removeUsers = createAsyncThunk(
  "users/removeUsers",
  async (id: any) => {
    const { data } = await remove(id);
    return data;
  }
);
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    const { data } = await list();
    return data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    values: [],
    valueOne: {},
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(addUsers.fulfilled, (state: any, action: any) => {
      state.values.push(action.payload);
    });
    builder.addCase(getUsers.fulfilled, (state: any, action: any) => {
      state.values = action.payload;
    });
    builder.addCase(readUsers.fulfilled, (state: any, action: any) => {
      state.valueOne = action.payload;
    });
    builder.addCase(removeUsers.fulfilled, (state: any, action: any) => {
      state.values = state.values.filter((item: any) => item._id !== action.payload._id)
    });
    builder.addCase(updateUsers.fulfilled, (state: any, action: any) => {
      state.values = state.values.map((item: any) => item._id === action.payload._id ? action.payload : item)
    });
  },
});

export default userSlice.reducer;
