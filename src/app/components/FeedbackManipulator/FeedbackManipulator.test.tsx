/* eslint-disable testing-library/no-await-sync-events */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen, waitFor, within } from "@testing-library/react"
import FeedbackManipulator from "./FeedbackManipulator"
import { debug } from "jest-preview"
import { FeedbackEditingType } from "@/types"
import userEvent from "@testing-library/user-event"
import ReduxProvider from "@/providers/ReduxProvider"
import { Toaster } from "@/components/ui/toaster"
import { rest } from "msw"
import { server } from "@/mocks/server"
import {
	clearListeners,
	resetMemoryState,
} from "@/components/ui/use-toast"

const useRouterPush = jest.fn()

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			push: useRouterPush,
		}
	},
}))

beforeEach(() => {
	jest.resetAllMocks()
	resetMemoryState()
	clearListeners()
})

describe("FeedbackManipulator", () => {
	const feedbackEditingType: FeedbackEditingType = {
		_id: "1",
		category: "feature",
		description: "test description",
		hasBeenUpvoted: false,
		status: "suggestion",
		title: "Test Title",
		upvotes: 0,
	}

	/**
	 * Unit Tests
	 */
	describe("individual elements should render correctly - {editing=false}", () => {
		test("Image tags", () => {
			render(<FeedbackManipulator editing={false} />)
			const images = screen.getAllByRole("img")
			expect(images).toHaveLength(2)
		})
		test("Main header saying 'Create New Feedback | Edit Feedback'", () => {
			render(<FeedbackManipulator editing={false} />)
			const createNewFeedbackHeader = screen.getByRole("heading", {
				name: /create new feedback/i,
			})
			expect(createNewFeedbackHeader).toBeInTheDocument()
		})
		test("Little 'Go Back' span top-left", () => {
			render(<FeedbackManipulator editing={false} />)
			const goBackSpan = screen.getByText(/go back/i)
			const goBackLink = screen.getByRole("link", {
				name: /go back/i,
			})
			expect(goBackSpan).toBeInTheDocument()
			expect(goBackLink).toBeInTheDocument()
		})
		describe("Feedback Title section", () => {
			test("Outer div", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackTitleLabel = screen.getByText(/feedback title/i)
				const feedbackDiv = feedbackTitleLabel.closest("div")
				expect(feedbackDiv).toBeInTheDocument()
			})
			test("Label", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackTitleLabel = screen.getByText(/feedback title/i)
				expect(feedbackTitleLabel).toBeInTheDocument()
			})
			test("Paragraph", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackTitleParagraph = screen.getByText(
					/add a short, descriptive headline/i
				)
				expect(feedbackTitleParagraph).toBeInTheDocument()
			})
			test("input", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackTitleInput = screen.getByLabelText(/feedback title/i)
				expect(feedbackTitleInput).toBeInTheDocument()
			})
		})
		describe("Feedback Category Section", () => {
			test("Outer div", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackCategoryParagraph = screen.getByText(
					/choose a category for your feedback/i
				)
				const feedbackCategoryDiv =
					feedbackCategoryParagraph.closest("div")
				expect(feedbackCategoryDiv).toBeInTheDocument()
			})
			test("Label", () => {
				const { container } = render(
					<FeedbackManipulator editing={false} />
				)
				const AllLabels = container.querySelectorAll("label")
				const feedbackCategoryLabel = Array.from(AllLabels).find(
					(label) => label.textContent === "Category"
				)
				expect(feedbackCategoryLabel).toBeInTheDocument()
			})
			test("Paragraph", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackCategoryParagraph = screen.getByText(
					/choose a category for your feedback/i
				)
				expect(feedbackCategoryParagraph).toBeInTheDocument()
			})
			describe("Select Input", () => {
				test("button (select trigger)", () => {
					render(<FeedbackManipulator editing={false} />)
					const feedbackCategoryBtn = screen.getByRole("combobox", {
						name: /category/i,
					})
					expect(feedbackCategoryBtn).toBeInTheDocument()
				})
				test("Span", () => {
					render(<FeedbackManipulator editing={false} />)
					const feedbackCategoryBtn = screen.getByRole("combobox", {
						name: /category/i,
					})

					const feedbackCategorySpan = within(
						feedbackCategoryBtn
					).getByText(/feature/i)
					expect(feedbackCategorySpan).toBeInTheDocument()
				})
				test("Svg", () => {
					const { container } = render(
						<FeedbackManipulator editing={false} />
					)
					const feedbackCategorySvgs = container.querySelectorAll("svg")
					const feedbackCategorySvg = Array.from(
						feedbackCategorySvgs
					).find((svg) => svg.getAttribute("viewBox") === "0 0 24 24")
					expect(feedbackCategorySvg).toBeInTheDocument()
				})
				test("Select", () => {
					render(<FeedbackManipulator editing={false} />)
					const feedbackCategorySelect =
						screen.getByDisplayValue(/feature/i)
					expect(feedbackCategorySelect).toBeInTheDocument()
				})
			})
		})
		describe("Feedback Detail Section", () => {
			test("Outer Div", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackDetailLabel = screen.getByText(/feedback detail/i)
				const feedbackDetailDiv = feedbackDetailLabel.closest("div")
				expect(feedbackDetailDiv).toBeInTheDocument()
			})
			test("Label", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackDetailLabel = screen.getByText(/feedback detail/i)
				expect(feedbackDetailLabel).toBeInTheDocument()
			})
			test("Paragraph", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackDetailParagraph = screen.getByText(
					/Include any specific comments/i
				)
				expect(feedbackDetailParagraph).toBeInTheDocument()
			})
			test("TextArea", () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackDetailTextArea =
					screen.getByLabelText(/feedback detail/i)
				expect(feedbackDetailTextArea).toBeInTheDocument()
			})
		})
		test("Submit Button", () => {
			render(<FeedbackManipulator editing={false} />)
			const submitBtn = screen.getByRole("button", {
				name: /add feedback/i,
			})
			expect(submitBtn).toBeInTheDocument()
		})
		test("Cancel Button", () => {
			render(<FeedbackManipulator editing={false} />)
			const cancelBtn = screen.getByRole("link", { name: /go back/i })
			expect(cancelBtn).toBeInTheDocument()
		})
		test("delete button should not be there", () => {
			render(<FeedbackManipulator editing={false} />)
			const deleteBtn = screen.queryByRole("button", { name: /delete/i })
			expect(deleteBtn).not.toBeInTheDocument()
		})
	})
	describe("individual elements should render correctly - {editing=true}", () => {
		test("Image tags", () => {
			render(
				<FeedbackManipulator
					editing={true}
					feedbackEditingType={feedbackEditingType}
				/>
			)
			const images = screen.getAllByRole("img")
			expect(images).toHaveLength(2)
		})
		test("Main header saying 'Create New Feedback | Edit Feedback'", () => {
			render(
				<FeedbackManipulator
					editing={true}
					feedbackEditingType={feedbackEditingType}
				/>
			)
			const createNewFeedbackHeader = screen.getByRole("heading", {
				name: /edit feedback/i,
			})
			expect(createNewFeedbackHeader).toBeInTheDocument()
		})
		test("Little 'Go Back' span top-left", () => {
			render(
				<FeedbackManipulator
					editing={true}
					feedbackEditingType={feedbackEditingType}
				/>
			)
			const goBackSpan = screen.getByText(/go back/i)
			const goBackLink = screen.getByRole("link", {
				name: /go back/i,
			})
			expect(goBackSpan).toBeInTheDocument()
			expect(goBackLink).toBeInTheDocument()
		})
		describe("Feedback Title section", () => {
			test("Outer div", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackTitleLabel = screen.getByText(/feedback title/i)
				const feedbackDiv = feedbackTitleLabel.closest("div")
				expect(feedbackDiv).toBeInTheDocument()
			})
			test("Label", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackTitleLabel = screen.getByText(/feedback title/i)
				expect(feedbackTitleLabel).toBeInTheDocument()
			})
			test("Paragraph", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackTitleParagraph = screen.getByText(
					/add a short, descriptive headline/i
				)
				expect(feedbackTitleParagraph).toBeInTheDocument()
			})
			test("input", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackTitleInput = screen.getByLabelText(/feedback title/i)
				expect(feedbackTitleInput).toBeInTheDocument()
			})
		})
		describe("Feedback Category Section", () => {
			test("Outer div", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackCategoryParagraph = screen.getByText(
					/choose a category for your feedback/i
				)
				const feedbackCategoryDiv =
					feedbackCategoryParagraph.closest("div")
				expect(feedbackCategoryDiv).toBeInTheDocument()
			})
			test("Label", () => {
				const { container } = render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const AllLabels = container.querySelectorAll("label")
				const feedbackCategoryLabel = Array.from(AllLabels).find(
					(label) => label.textContent === "Category"
				)
				expect(feedbackCategoryLabel).toBeInTheDocument()
			})
			test("Paragraph", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackCategoryParagraph = screen.getByText(
					/choose a category for your feedback/i
				)
				expect(feedbackCategoryParagraph).toBeInTheDocument()
			})
			describe("Select Input", () => {
				test("button (select trigger)", () => {
					render(
						<FeedbackManipulator
							editing={true}
							feedbackEditingType={feedbackEditingType}
						/>
					)
					const feedbackCategoryBtn = screen.getByRole("combobox", {
						name: /category/i,
					})
					expect(feedbackCategoryBtn).toBeInTheDocument()
				})
				test("Span", () => {
					render(
						<FeedbackManipulator
							editing={true}
							feedbackEditingType={feedbackEditingType}
						/>
					)
					const feedbackCategoryBtn = screen.getByRole("combobox", {
						name: /category/i,
					})
					const feedbackCategorySpan = within(
						feedbackCategoryBtn
					).getByText(/feature/i)
					expect(feedbackCategorySpan).toBeInTheDocument()
				})
				test("Svg", () => {
					const { container } = render(
						<FeedbackManipulator
							editing={true}
							feedbackEditingType={feedbackEditingType}
						/>
					)
					const feedbackCategorySvgs = container.querySelectorAll("svg")
					const feedbackCategorySvg = Array.from(
						feedbackCategorySvgs
					).find((svg) => svg.getAttribute("viewBox") === "0 0 24 24")
					expect(feedbackCategorySvg).toBeInTheDocument()
				})
				test("Select", () => {
					render(
						<FeedbackManipulator
							editing={true}
							feedbackEditingType={feedbackEditingType}
						/>
					)
					const feedbackCategorySelect =
						screen.getByDisplayValue(/feature/i)
					expect(feedbackCategorySelect).toBeInTheDocument()
				})
			})
		})
		describe("Feedback Detail Section", () => {
			test("Outer Div", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackDetailLabel = screen.getByText(/feedback detail/i)
				const feedbackDetailDiv = feedbackDetailLabel.closest("div")
				expect(feedbackDetailDiv).toBeInTheDocument()
			})
			test("Label", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackDetailLabel = screen.getByText(/feedback detail/i)
				expect(feedbackDetailLabel).toBeInTheDocument()
			})
			test("Paragraph", () => {
				render(
					<FeedbackManipulator
						editing={true}
						feedbackEditingType={feedbackEditingType}
					/>
				)
				const feedbackDetailParagraph = screen.getByText(
					/Include any specific comments/i
				)
				expect(feedbackDetailParagraph).toBeInTheDocument()
			})
			test("TextArea", () => {
				render(<FeedbackManipulator editing={true} />)
				const feedbackDetailTextArea =
					screen.getByLabelText(/feedback detail/i)
				expect(feedbackDetailTextArea).toBeInTheDocument()
			})
		})
		test("Submit Button", () => {
			render(<FeedbackManipulator editing={true} />)
			const submitBtn = screen.getByRole("button", {
				name: /Update Feedback/i,
			})
			expect(submitBtn).toBeInTheDocument()
		})
		test("Cancel Button", () => {
			render(
				<FeedbackManipulator
					editing={true}
					feedbackEditingType={feedbackEditingType}
				/>
			)
			const cancelBtn = screen.getByRole("link", { name: /go back/i })
			expect(cancelBtn).toBeInTheDocument()
		})
		test("delete button should be there", () => {
			render(
				<FeedbackManipulator
					editing={true}
					feedbackEditingType={feedbackEditingType}
				/>
			)
			const deleteBtn = screen.getByRole("button", { name: /delete/i })
			expect(deleteBtn).toBeInTheDocument()
		})
	})
	describe("Form Validation", () => {
		describe("Fields should be disabled", () => {
			test("if you try submitting with empty forms", async () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackTitleInput = screen.getByLabelText(/feedback title/i)
				const feedbackDetailTextArea =
					screen.getByLabelText(/feedback detail/i)
				const submitBtn = screen.getByRole("button", {
					name: /add feedback/i,
				})
				expect(feedbackTitleInput).toHaveAttribute("aria-invalid", "false")
				expect(feedbackDetailTextArea).toHaveAttribute(
					"aria-invalid",
					"false"
				)
				await userEvent.click(submitBtn)
				expect(feedbackTitleInput).toHaveAttribute("aria-invalid", "true")
				expect(feedbackDetailTextArea).toHaveAttribute(
					"aria-invalid",
					"true"
				)
			})
			test("if you try submitting with form values that are too long", async () => {
				render(<FeedbackManipulator editing={false} />)
				const feedbackTitleInput = screen.getByLabelText(/feedback title/i)
				const feedbackDetailTextArea =
					screen.getByLabelText(/feedback detail/i)
				const submitBtn = screen.getByRole("button", {
					name: /add feedback/i,
				})
				await userEvent.type(
					feedbackTitleInput,
					"Lorem ipsum dolor sit amet consectetur adipisicing elit"
				)
				await userEvent.type(
					feedbackDetailTextArea,
					`Step-by-Step GuideMock API Calls: Use jest.mock() to mock the fetch API calls that your onSubmit function mak					Mock Routing: Since you're using Next.js's useRouter, you'll also need to mock this to test if the page is being es. This allows you to simulate both successful and unsuccessful API responses.
					User Interaction: Use userEvent to simulate user interactions like filling in the form and clicking the submit button.
					Assertions: Finally, make assertions to check if the expected behavior is met. This can include checking if the mock API was called, if the toast was displayed, and if the router navigated to the correct page.
					Here's some sample code to give you an idea:
					javascript`
				)
				expect(feedbackTitleInput).toHaveAttribute("aria-invalid", "false")
				expect(feedbackDetailTextArea).toHaveAttribute(
					"aria-invalid",
					"false"
				)
				await userEvent.click(submitBtn)
				expect(feedbackTitleInput).toHaveAttribute("aria-invalid", "true")
				expect(feedbackDetailTextArea).toHaveAttribute(
					"aria-invalid",
					"true"
				)
			})
		})
	})

	/**
	 * Intergration Tests
	 */
	describe("Form Submission", () => {
		describe("Editing = false", () => {
			test("form submits and shows 'Success' toast upon successful API call", async () => {
				render(
					<ReduxProvider>
						<section className="relative h-screen">
							<FeedbackManipulator editing={false} />
						</section>
						<Toaster />
					</ReduxProvider>
				)
				const feedbackTitleInput = screen.getByLabelText(/feedback title/i)
				const feedbackDetailTextArea =
					screen.getByLabelText(/feedback detail/i)
				const submitBtn = screen.getByRole("button", {
					name: /add feedback/i,
				})

				await userEvent.type(feedbackTitleInput, "Test Title")
				await userEvent.type(feedbackDetailTextArea, "Test Description")
				await userEvent.click(submitBtn)
				await waitFor(() => {
					expect(useRouterPush).toHaveBeenCalledWith("/home")
				})
				const toast = await screen.findByRole("region")
				expect(toast).toBeInTheDocument()
			})
			test("form submits and shows 'Error' toast upon unsuccessful API call", async () => {
				server.use(
					rest.post("/api/productRequest", (req, res, ctx) => {
						return res(ctx.status(400))
					})
				)
				render(
					<ReduxProvider>
						<section className="relative h-screen">
							<FeedbackManipulator editing={false} />
						</section>
						<Toaster />
					</ReduxProvider>
				)
				const feedbackTitleInput = screen.getByLabelText(/feedback title/i)
				const feedbackDetailTextArea =
					screen.getByLabelText(/feedback detail/i)
				const submitBtn = screen.getByRole("button", {
					name: /add feedback/i,
				})

				await userEvent.type(feedbackTitleInput, "Test Title")
				await userEvent.type(feedbackDetailTextArea, "Test Description")
				await userEvent.click(submitBtn)
				await waitFor(() => {
					expect(useRouterPush).not.toHaveBeenCalled()
				})
				const toast = await screen.findByText(/something went wrong/i)
				expect(toast).toBeInTheDocument()
			})
		})
		describe("Editing = true", () => {
			test("form submits and shows 'Success' toast upon successful API call", async () => {
				render(
					<ReduxProvider>
						<section className="relative h-screen">
							<FeedbackManipulator
								editing={true}
								feedbackEditingType={feedbackEditingType}
							/>
						</section>
						<Toaster />
					</ReduxProvider>
				)
				const submitBtn = screen.getByRole("button", {
					name: /Update Feedback/i,
				})
				await userEvent.click(submitBtn)
				const toast = await screen.findByRole("region")
				await waitFor(() => {
					expect(useRouterPush).toHaveBeenCalledWith("/home")
				})
				expect(toast).toBeInTheDocument()
			})
			test("form submits and shows 'Error' toast upon unsuccessful API call", async () => {
				server.use(
					rest.put("/api/productRequest", (req, res, ctx) => {
						return res(ctx.status(400))
					})
				)
				render(
					<ReduxProvider>
						<section className="relative h-screen">
							<FeedbackManipulator
								editing={true}
								feedbackEditingType={feedbackEditingType}
							/>
						</section>
						<Toaster />
					</ReduxProvider>
				)
				const feedbackTitleInput = screen.getByLabelText(/feedback title/i)
				const feedbackDetailTextArea =
					screen.getByLabelText(/feedback detail/i)
				const submitBtn = screen.getByRole("button", {
					name: /Update Feedback/i,
				})
				await userEvent.click(submitBtn)
				await waitFor(() => {
					expect(useRouterPush).not.toHaveBeenCalled()
				})
				const toast = await screen.findByRole("region")
				expect(toast).toBeInTheDocument()
			})
		})
	})
})
