
type Category = "all" | "UI" | "UX" | "enhancement" | "bug" | "feature"

type Status = "suggestion" | "planned" | "in-progress" | "live"

interface ProductRequest {
	_id: number
	title: string
	category: Category
	upvotes: number
	status: Status
	description: string
	comments: Comment[]
}

interface Comment {
	_id: number
	content: string
	user: User
	replies?: Comment[]
}

interface User {
	_id: string
	image: string
	name: string
	username: string
}
