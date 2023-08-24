import { renderWithProviders } from "@/test/test-utils"
import { screen } from "@testing-library/react"
import CategoryRadioGroup from "./CategoryRadioGroup"
import CategoryRadioGroupItem from "../CategoryRadioGroupItem/CategoryRadioGroupItem"
import { experimental_useEffectEvent } from "react"
import { RadioGroup } from "@/components/ui/radio-group"

describe("CategoryRadioGroup", () => {
	test("renders children correctly", () => {
		const { container } = renderWithProviders(
			<CategoryRadioGroup
				defaultValue="all"
				className="relative"
			>
				<div data-testid="test-child"></div>
			</CategoryRadioGroup>
		)
		const test = screen.getByTestId("test-child")
		expect(test).toBeInTheDocument()
	})
	test("applies classes correctly", () => {
		const { container } = renderWithProviders(
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
