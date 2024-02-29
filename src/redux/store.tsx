import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './slices/cartSlices'

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})