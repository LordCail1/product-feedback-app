import { notFound } from "next/navigation"
import FeedbackManipulator from "@/app/components/FeedbackManipulator/FeedbackManipulator"
import getSingleProductRequest from "@/lib/getSingleProductRequest"

type Props = {
	params: {
		id: string
	}
}

export default async function Page({ params: { id } }: Props) {
	const feedback = await getSingleProductRequest(id)
	
	if (!feedback) {
		return notFound()
	}

	return (
		<section className="relative h-screen">
			<FeedbackManipulator
				editing={true}
				feedbackEditingType={{
					category: feedback.category,
					description: feedback.description,
					status: feedback.status,
					title: feedback.title,
					upvotes: feedback.upvotes,
					_id: id
				}}
			/>
		</section>
	)
}
