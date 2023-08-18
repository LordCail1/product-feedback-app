import { Category, RadioContainerCategory } from "@/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		category: RadioContainerCategory
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
		changeCategory: (state, action: PayloadAction<RadioContainerCategory>) => {
			state.value.category = action.payload
		},
	},
})

export default categorySlice.reducer
export const { changeCategory } = categorySlice.actions
