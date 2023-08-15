import { ProductRequestBaseType } from "@/types"
import FeedbackCard from "../FeedbackCard/FeedbackCard"
import getFeedbacks from "@/lib/getFeedbacks"

export default async function FeedbackList() {
	const feedbacks: ProductRequestBaseType[] = await getFeedbacks()
	return (
		<div className="relative flex w-full flex-col rounded-xl">
			{feedbacks.map((feedback) => (
				<FeedbackCard
					key={feedback.description}
					upVotes={feedback.upvotes}
					category={feedback.category}
					description={feedback.description}
					title={feedback.title}
					commentCount={feedback.comments?.length}
				/>
			))}
		</div>
	)
}
