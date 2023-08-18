import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		expanded: boolean
	}
}

const initialState: InitialState = {
    value: {
        expanded: false
    }
}

export const sidebarSlice = createSlice({
	name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.value.expanded = !state.value.expanded
        }
    }
})


export const { toggleSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
