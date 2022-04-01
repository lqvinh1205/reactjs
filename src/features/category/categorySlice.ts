import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { list, read } from "../../api/category";

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
    }
})

export default Category.reducer