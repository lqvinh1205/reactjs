import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { read as readCate} from "../../api/category";
import { create, list, read, remove, update } from "../../api/products";

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: any) => {
    try {
      const { data } = await create(product);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id: any) => {
    try {
      const { data } = await remove(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const readProduct = createAsyncThunk(
  "products/readProduct",
  async (id:any) => {
    console.log(id)
    try {
      const { data } = await read(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: any) => {
    try {
      const { data } = await update(product);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const listProduct = createAsyncThunk(
  "products/listProduct",
  async () => {
    try {
      const { data } = await list();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const listProductWithCate = createAsyncThunk(
  "products/listProductWithCate",
  async (id: any) => {
    try {
      const { data: {products} } = await readCate(id);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    values: [],
    valueOne: [],
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(addProduct.fulfilled, (state: any, action: any) => {
      state.values.push(action.payload);
    });
    builder.addCase(removeProduct.fulfilled, (state: any, action: any) => {
      console.log(action.payload._id);

      state.values = state.values.filter(
        (item: any) => item._id !== action.payload._id
      );
    });
    builder.addCase(listProduct.fulfilled, (state: any, action: any) => {
      state.values = action.payload;
    });
    builder.addCase(listProductWithCate.fulfilled, (state: any, action: any) => {
      state.values = action.payload;
    });
    builder.addCase(readProduct.fulfilled, (state: any, action: any) => {
      state.valueOne = action.payload;
    });
    builder.addCase(updateProduct.fulfilled, (state: any, action: any) => {
      state.values = state.values.map((item: any) =>
        item._id === action.payload._id ? action.payload : item
      );
    });
  },
});

export default productSlice.reducer;
