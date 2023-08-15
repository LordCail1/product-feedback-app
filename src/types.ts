import { Document, Types } from "mongoose"

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

/**
 * This type is used for the types of fields that we have for the feedbacks
 */
export type FeedbackField =
	| "title"
	| "category"
	| "feedbackDetail"
	| "feedbackStatus"

/**
 * This type is used for the types of a product request
 */
export interface ProductRequestBaseType {
	_id?: Types.ObjectId
	title: string
	category: Category
	upvotes: number
	status: Status
	description: string
	comments?: Comment[]
}

/**This type is used for extending the regular 'ProductRequestBase' type with mongoose functionality */
export interface ProductRequestModelType
	extends ProductRequestBaseType,
		Document {
	_id: Types.ObjectId
}

/**This type is used for the types of a comment*/
export interface CommentBaseType {
	_id?: Types.ObjectId
	content: string
	user: UserBaseType
	replies?: Comment[]
}

/**This type is used for extending the regular 'CommentBase' type with mongoose functionality */
export interface CommentModelType extends CommentBaseType, Document {
	_id: Types.ObjectId
}

/**This type is used for the types of a user */
export interface UserBaseType {
	_id?: Types.ObjectId
	image: string
	name: string
	username: string
}

/**This type is used for extending the regular 'UserBase' type with mongoose functionality */
export interface UserModelType extends UserBaseType, Document {
	_id: Types.ObjectId
}
