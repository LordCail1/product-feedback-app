import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from '../features/filterSlice'

export const store = configureStore({
    reducer: filterSliceReducer
})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch