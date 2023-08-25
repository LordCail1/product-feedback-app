/* eslint-disable testing-library/no-await-sync-events */
import { screen, waitFor } from "@testing-library/react"
import CategoryRadioGroupItem from "./CategoryRadioGroupItem"
import { renderWithProviders } from "@/test/test-utils"
import { RadioGroup } from "@radix-ui/react-radio-group"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

describe("Component", () => {


	test("changes state when button is clicked", async () => {
		const {store } = renderWithProviders(
			<RadioGroup>
				<CategoryRadioGroupItem categoryValue="all" />
				<CategoryRadioGroupItem categoryValue="bug" />
			</RadioGroup>
		)
		const allButton = screen.getByLabelText(/all/i)
		const bugButton = screen.getByLabelText(/bug/i)
		await act(async() => {
			expect(store.getState().category.value.category).toEqual("all")
			await bugButton.click()
			expect(store.getState().category.value.category).toEqual("bug")
			await allButton.click()
			expect(store.getState().category.value.category).toEqual("all")
		})
	})


	test("renders correctly and color changes when hovered", async () => {
		const { getByRole } = renderWithProviders(
			<RadioGroup>
				<CategoryRadioGroupItem categoryValue="all" />
			</RadioGroup>
		)
		const categoryRadioGroupItem = screen.getByRole("radiogroup")
		expect(categoryRadioGroupItem).toBeInTheDocument()
		await userEvent.hover(categoryRadioGroupItem)
		//making sure the style is changed when hovered
		expect(categoryRadioGroupItem).toHaveStyle("color: rgb(207, 215, 255")

	})


})
