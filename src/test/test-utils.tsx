import { PropsWithChildren } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { PreloadedState } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { AppStore, RootState, setupStore } from "@/store/store"

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: PreloadedState<RootState>
	store?: AppStore
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
		return (
			<>
				<Provider store={store}>{children}</Provider>
			</>
		)
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
