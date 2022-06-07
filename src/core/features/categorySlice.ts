import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, read, remove, update } from "../api/category";

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async () => {
        try {
            const {data} = await list()
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const createCategory = createAsyncThunk(
    'category/createCategory',
    async (cate: any) => {
        try {
            const {data} = await create(cate)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const removeCategory = createAsyncThunk(
    'category/removeCategory',
    async (id: any) => {
        try {
            const {data} = await remove(id)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async (cate: any) => {
        try {
            const {data} = await update(cate)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const readCategory = createAsyncThunk(
    'category/readCategory',
    async (id: any) => {
        try {
            const {data} = await read(id)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
const Category = createSlice({
    name: "category",
    initialState: {
        values: [],
        value: {},
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state: any, action: any) => {
            state.values = action.payload
        });
        builder.addCase(readCategory.fulfilled, (state: any, action: any) => {
            state.value = action.payload
        });
        builder.addCase(removeCategory.fulfilled, (state: any, action: any) => {
            state.values = state.values.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(updateCategory.fulfilled, (state: any, action: any) => {
            state.values = state.values.map((item: any) => item._id === action.payload._id ? action.payload : item)
        });
        builder.addCase(createCategory.fulfilled, (state: any, action: any) => {
            state.values.push(action.payload)
        });
    }
})

export default Category.reducer