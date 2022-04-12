import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import authReducer from '../features/auth/authSlice';
import productReducer from '../features/products/productSlice';
import categoryReducer from '../features/category/categorySlice';
import cartReducer from '../features/Cart/CartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
