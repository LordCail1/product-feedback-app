import {z} from 'zod'

export const Category = z.enum(["all", "UI", "UX", "enhancement", "bug", "feature"])
export const Status = z.enum(["suggestion", "planned", "in-progress", "live"])