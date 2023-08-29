import { render, screen } from "@testing-library/react"
import FeedbackManipulator from "./FeedbackManipulator"
import * as nextRouter from "next/navigation"

jest.mock("next/navigation")


describe("FeedbackManipulator",  () => {
	test("should render correctly with children", async () => {  
		render(<FeedbackManipulator editing={false} />)
		const images = screen.getAllByRole("img")
		expect(images).toHaveLength(2)
		screen.debug()

	})
})
