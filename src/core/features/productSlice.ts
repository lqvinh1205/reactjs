import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { read as readCate } from "../api/category";
import {
  create,
  list,
  listPagination,
  range,
  read,
  remove,
  search,
  update,
} from "../api/products";



export const listProduct = createAsyncThunk(
  "products/listProduct",
  async () => {
    try {
      const { data } = await list();
      return data;
    } catch (error) {
      notification.error({
        message: "Thông báo",
        description: "Không thể lấy danh sách sản phẩm",
      });
    }
  }
);
export const listProductPagination = createAsyncThunk(
  "products/listProductPagination",
  async (value: any) => {
    try {
      const { data } = await listPagination(value[0], value[1]);
      return data;
    } catch (error) {
      notification.error({
        message: "Thông báo",
        description: "Không thể lấy danh sách sản phẩm",
      });
    }
  }
);

export const readProduct = createAsyncThunk(
  "products/readProduct",
  async (id: any) => {
    try {
      const { data } = await read(id);
      return data;
    } catch (error) {
      notification.error({
        message: "Thông báo",
        description: "Không tìm thấy sản phẩm",
      });
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: any) => {
    try {
      const { data } = await create(product);
      notification.success({
        message: "Thông báo",
        description: "Thêm sản phẩm thành công!",
      })
      return data;
    } catch (error) {
      notification.error({
        message: "Thông báo",
        description: "Không thể thêm sản phẩm",
        duration: 20
      });
    }
  }
);
export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id: any) => {
    try {
      const { data } = await remove(id);
      notification.success({
        message: "Thông báo",
        description: "Xóa sản phẩm thành công!",
      })
      return data;
    } catch (error) {
      notification.error({
        message: "Thông báo",
        description: "Không thể xóa sản phẩm",
      });
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: any) => {
    try {
      const { data } = await update(product);
      notification.success({
        message: "Thông báo",
        description: "Cập nhật sản phẩm thành công!",
      })
      return data;
    } catch (error) {
      notification.error({
        message: "Thông báo",
        description: "Không thể cập nhật sản phẩm",
      });
    }
  }
);


export const listProductWithCate = createAsyncThunk(
  "products/listProductWithCate",
  async (id: any) => {
    try {
      const {
        data: { products },
      } = await readCate(id);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (value: any) => {
    try {
      const { data } = await search(value);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const rangePrice = createAsyncThunk(
  "products/rangePrice",
  async (value: any) => {
    try {
      const { data } = await range(value[0], value[1]);
      return data;
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
    builder.addCase(listProductPagination.fulfilled, (state: any, action: any) => {
      state.values = action.payload;
    });
    builder.addCase(
      listProductWithCate.fulfilled,
      (state: any, action: any) => {
        state.values = action.payload;
      }
    );
    builder.addCase(searchProducts.fulfilled, (state: any, action: any) => {
      state.values = action.payload;
    });
    builder.addCase(rangePrice.fulfilled, (state: any, action: any) => {
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
