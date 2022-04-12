import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create as createCart, read } from "../../api/cart";
import { create, list } from "../../api/detailCart";

export const addCart = createAsyncThunk(
    "cart/addCart",
    async (product: any) => {
        try {
            const { data } = await createCart(product)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const readCart = createAsyncThunk(
    "cart/addCart",
    async (id: any) => {
        try {
            const { data } = await read(id)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const addDetailCart = createAsyncThunk(
    "cart/addDetailCart",
    async (product: any) => {
        try {
            const { data } = await create(product)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const getDetailCart = createAsyncThunk(
    "cart/getDetailCart",
    async () => {
        try {
            const { data } = await list()
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartId: {},
        detailCart: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addCart.fulfilled, (state: any, action: any) => {
            state.cartID = action.payload
        })
        builder.addCase(addDetailCart.fulfilled, (state: any, action: any) => {
            state.detailCart.push(action.payload)
        })
    }
})

export default CartSlice.reducer