import { renderWithProviders } from "@/test/test-utils"
import { screen } from "@testing-library/react"
import CategoryContainer from "@/app/components/CategoryContainer/CategoryContainer"
import CategoryRadioGroup from "../CategoryRadioGroup/CategoryRadioGroup"

describe("CategoryContainer", () => {
	test("renders all CategoryRadioGroupItems", () => {
		renderWithProviders(<CategoryContainer />)
		const categoryRadioGroupItems = screen.getAllByRole("radio")
		expect(categoryRadioGroupItems).toHaveLength(6)
	})
})
