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
	test("renders text of children correctly", () => {
		renderWithProviders(<CategoryContainer />)
		const allCategory = screen.getByText(/all/i)
		const uiCategory = screen.getByText(/ui/i)
		const uxCategory = screen.getByText(/ux/i)
		const enhancementCategory = screen.getByText(/enhancement/i)
		const bugCategory = screen.getByText(/bug/i)
		const featureCategory = screen.getByText(/feature/i)

		expect(allCategory).toBeInTheDocument()
		expect(uiCategory).toBeInTheDocument()
		expect(uxCategory).toBeInTheDocument()
		expect(enhancementCategory).toBeInTheDocument()
		expect(bugCategory).toBeInTheDocument()
		expect(featureCategory).toBeInTheDocument()

		const categoryContainer = screen.getByRole("radiogroup")
		expect(categoryContainer).toBeInTheDocument()
	})
})
