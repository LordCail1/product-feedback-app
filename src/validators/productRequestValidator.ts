import { Category, Status } from "./commonValidators"
import { z } from "zod"

export const productRequestValidator = z.object({
	category: Category,
	comments: z.array(z.string()).optional(),
	description: z.string().min(1).max(500),
	hasBeenUpvoted: z.boolean(),
	status: Status,
	title: z.string().min(1, "Can't be empty").max(50, "Can't be more than 50 characters!"),
	upvotes: z.number().int().nonnegative(),
})
