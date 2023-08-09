import { Document } from "mongoose"

/**
 * This type is used for selecting different categories to view
 */
export type Category =
	| "all"
	| "UI"
	| "UX"
	| "enhancement"
	| "bug"
	| "feature"

/**
 * This type is used for the different filter choices in the navbar
 */
export type SuggestionFilter =
	| "Most Upvotes"
	| "Least Upvotes"
	| "Most Comments"
	| "Least Comments"

/**
 * This type is used to set different statuses to the suggestions created by users
 */
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
