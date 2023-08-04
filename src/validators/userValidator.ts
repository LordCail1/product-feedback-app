import {z} from 'zod'

export const userValidator = z.object({
    _id: z.string(),
    image: z.string().url(),
    name: z.string().min(1).max(50),
    username: z.string().min(1).max(50)
})
