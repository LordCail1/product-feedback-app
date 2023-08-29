import { renderWithProviders } from "@/test/utils/RenderWithProviders"
import { render, screen } from "@testing-library/react"
import CategoryRadioGroup from "./CategoryRadioGroup"
import CategoryRadioGroupItem from "../CategoryRadioGroupItem/CategoryRadioGroupItem"

describe("CategoryRadioGroup", () => {
	test("renders children correctly", () => {
		const { container } = render(
			<CategoryRadioGroup
				defaultValue="all"
				className="relative"
			>
				<div>yo</div>
			</CategoryRadioGroup>
		)
		expect(container).toBeInTheDocument()
	})
	test("applies classes correctly", () => {
		const { container } = render(
			<CategoryRadioGroup
				defaultValue="all"
				className="justify-center p-8"
			>
				<div>hey</div>
			</CategoryRadioGroup>
		)
		const categoryRadioGroup = screen.getByRole("radiogroup")
		expect(categoryRadioGroup).toHaveClass("p-8", "justify-center")
	})
	test("default value is set correctly", () => {
		renderWithProviders(
			<CategoryRadioGroup
				defaultValue="enhancement"
				className="p-8"
			>
				<CategoryRadioGroupItem categoryValue="all" />
				<CategoryRadioGroupItem categoryValue="UI" />
				<CategoryRadioGroupItem categoryValue="UX" />
				<CategoryRadioGroupItem categoryValue="enhancement" />
				<CategoryRadioGroupItem categoryValue="bug" />
				<CategoryRadioGroupItem categoryValue="feature" />
			</CategoryRadioGroup>
		)
		const button = screen.getByRole("radio", { name: /enhancement/i })
		expect(button).toBeChecked()
	})
})
