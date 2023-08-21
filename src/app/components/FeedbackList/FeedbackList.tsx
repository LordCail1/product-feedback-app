import { ProductRequestBaseType } from "@/types"
import FeedbackCard from "../FeedbackCard/FeedbackCard"
import getAllProductRequests from "@/lib/getAllProductRequests"

export default async function FeedbackList() {
	const feedbacks: ProductRequestBaseType[] = await getAllProductRequests()
	return (
		<div className="relative flex w-full flex-col rounded-xl">
			{feedbacks.map((feedback) => (
				<FeedbackCard
					category={feedback.category}
					commentCount={feedback.comments?.length}
					description={feedback.description}
					hasBeenUpvoted={feedback.hasBeenUpvoted}
					id={feedback._id?.toString()}
					key={feedback.description}
					title={feedback.title}
					upVotes={feedback.upvotes}
				/>
			))}
		</div>
	)
}
