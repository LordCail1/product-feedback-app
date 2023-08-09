import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from '@/features/categorySlice'
import suggestionsFilterSlice from "@/features/suggestionsFilterSlice";

export const store = configureStore({
    reducer: {
        category: categorySliceReducer,
        suggestionsFilter: suggestionsFilterSlice
    }

})


export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch