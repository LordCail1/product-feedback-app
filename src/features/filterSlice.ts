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

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		changeFilter: (state, action: PayloadAction<Category>) => {
			state.value.category = action.payload
		},
	},
})

export default filterSlice.reducer
export const { changeFilter } = filterSlice.actions
