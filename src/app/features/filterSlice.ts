import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		filter: Filter
	}
}

const initialState: InitialState = {
	value: {
		filter: "All",
	},
}

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		changeFilter: (state, action: PayloadAction<Filter>) => {
			state.value.filter = action.payload
		},
	},
})

export default filterSlice.reducer
export const { changeFilter } = filterSlice.actions
