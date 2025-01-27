import { configureStore } from '@reduxjs/toolkit'
import shoppingReducer from './shoppingslice'

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the return type of `useSelector` and `useDispatch` from the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

