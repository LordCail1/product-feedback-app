import { Document } from "mongoose"

export type Category =
	| "all"
	| "UI"
	| "UX"
	| "enhancement"
	| "bug"
	| "feature"

export type Status = "suggestion" | "planned" | "in-progress" | "live"

export interface ProductRequest extends Document {
	_id: number
	title: string
	category: Category
	upvotes: number
	status: Status
	description: string
	comments?: Comment[]
}

export interface Comment extends Document {
	_id: number
	content: string
	user: User
	replies?: Comment[]
}

export interface User extends Document {
	_id: string
	image: string
	name: string
	username: string
}
