import { configureStore } from "@reduxjs/toolkit"
import categorySliceReducer from "@/features/categorySlice"
import sidebarSliceReducer from "@/features/sidebarSlice"
import suggestionsFilterSlice from "@/features/suggestionsFilterSlice"

export const store = configureStore({
	reducer: {
		category: categorySliceReducer,
		sidebar: sidebarSliceReducer,
		suggestionsFilter: suggestionsFilterSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
