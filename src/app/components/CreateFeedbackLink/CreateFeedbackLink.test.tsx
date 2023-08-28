/* eslint-disable testing-library/no-await-sync-events */
import { render, screen, within } from "@testing-library/react"
import CreateFeedbackLink from "./CreateFeedbackLink"



describe("CreateFeedbackLink", () => {
	test("renders properly", () => {
		render(<CreateFeedbackLink />)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute("href", "/createFeedback")
		const image = within(link).getByRole("img")
		expect(image).toBeInTheDocument()
	})
})
