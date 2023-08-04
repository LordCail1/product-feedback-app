import { z } from "zod"

export const commentValidator = z.object({
    _id: z.string(),
    content: z.string().min(1).max(500),
    user: z.string(),
    replies: z.array(z.string()).optional()
})















