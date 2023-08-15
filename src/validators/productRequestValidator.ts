import { Category, Status } from "./commonValidators"
import { z } from "zod"

export const productRequestValidator = z.object({
	title: z
		.string()
		.min(1, "Can't be empty")
		.max(50, "Can't be more than 50 characters!"),
	category: Category,
	upvotes: z.number().int().nonnegative(),
	status: Status,
	description: z.string().min(1).max(500),
	comments: z.array(z.string()).optional(),
})
