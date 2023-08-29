import { renderWithProviders } from "@/test/utils/RenderWithProviders"
import { screen } from "@testing-library/react"
import CategoryContainer from "@/app/components/CategoryContainer/CategoryContainer"

describe("CategoryContainer", () => {
	test("renders all CategoryRadioGroupItems", () => {
		renderWithProviders(<CategoryContainer />)
		const categoryRadioGroupItems = screen.getAllByRole("radio")
		expect(categoryRadioGroupItems).toHaveLength(6)
	})
})
