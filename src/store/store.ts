import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"
import categorySliceReducer from "@/features/categorySlice"
import sidebarSliceReducer from "@/features/sidebarSlice"
import suggestionsFilterSlice from "@/features/suggestionsFilterSlice"

const rootReducer = combineReducers({
	category: categorySliceReducer,
	sidebar: sidebarSliceReducer,
	suggestionsFilter: suggestionsFilterSlice,
})



export function setupStore(preloadedState?: PreloadedState<ReturnType<typeof rootReducer>>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	})
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
