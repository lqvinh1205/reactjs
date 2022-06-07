import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../api/cart";

export const getCarts = createAsyncThunk(
    "cart/getCarts",
    async (userId: String) => {
        try {
            const { data } = await list(userId)
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
        carts: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCarts.fulfilled, (state: any, action: any) => {
            state.carts = action.payload
        })
    }
})

export default CartSlice.reducer