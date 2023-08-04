import {z} from 'zod'
import { Category, Status } from './commonValidators'

export const productRequestValidator = z.object({
    _id: z.string(),
    title: z.string().min(1).max(100),
    category: Category,
    upvotes: z.number().int().positive(),
    status: Status,
    description: z.string().min(1).max(500),
    comments: z.array(z.string())
})