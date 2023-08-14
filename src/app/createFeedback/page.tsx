import FeedbackManipulator from "@/app/components/FeedbackManipulator/FeedbackManipulator"


export const revalidate = 0

export default function Page() {
	return (
		<section className="relative h-screen bg-ghost_white">
			<FeedbackManipulator />
		</section>
	)
}
