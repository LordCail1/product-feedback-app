import { SuggestionFilter } from "@/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		suggestionsFilter: SuggestionFilter
	}
}

const initialState: InitialState = {
	value: {
		suggestionsFilter: "Most Upvotes",
	},
}

const suggestionsFilterSlice = createSlice({
    name: "suggestionsFilter",
    initialState,
    reducers: {
        changeSuggestionsFilter: (state, action: PayloadAction<SuggestionFilter>) => {
            state.value.suggestionsFilter = action.payload
        }
    }
})


export default suggestionsFilterSlice.reducer
export const { changeSuggestionsFilter } = suggestionsFilterSlice.actions


