import { Category } from "@/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		category: Category
	}
}

const initialState: InitialState = {
	value: {
		category: "all",
	},
}

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		changeCategory: (state, action: PayloadAction<Category>) => {
			console.log('this played')
			state.value.category = action.payload
		},
	},
})

export default categorySlice.reducer
export const { changeCategory } = categorySlice.actions
