import getFeedbacks from "@/lib/getFeedbacks"
import FeedbackCard from "../FeedbackCard/FeedbackCard"
import { ProductRequestBaseType } from "@/types"

export default async function FeedbackList() {
	
	

	const feedbacks: ProductRequestBaseType[] = await getFeedbacks()



	return (
		<div className="relative flex w-full flex-col rounded-xl">
			{feedbacks.map((feedback) => (
				<FeedbackCard key={feedback.description}/>

			))}
		</div>
	)
}
