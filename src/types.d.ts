type Category = "all" | "UI" | "UX" | "enhancement" | "bug" | "feature"

type Status = "suggestion" | "planned" | "in-progress" | "live" 

type ProductRequest = {
    id: number
    title: string
    category: Category
    upvotes: number
    status: Status
    description: string
    comments: Comment[]
}


type Comment = {
    id: number
    content: string
    user: User
    replies?: Comment[]
}

type User= {
    image: string
    name: string
    username: string
}