import FeedbackManipulator from "@/app/components/FeedbackManipulator/FeedbackManipulator"
import getSingleProductRequest from "@/lib/getSingleProductRequest"
import { notFound } from "next/navigation"

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
	console.log(feedback)

	return (
		<section className="relative h-screen">
			<FeedbackManipulator
				editing={true}
				feedbackEditingType={{
					title: feedback.title,
					category: feedback.category,
					description: feedback.description,
					status: feedback.status,
				}}
			/>
		</section>
	)
}
