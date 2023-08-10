import FeedbackManipulator from "@/components/FeedbackManipulator/FeedbackManipulator"


export const revalidate = 0

export default function Page() {
	return (
		<section className="h-screen relative bg-ghost_white">
			<FeedbackManipulator />
		</section>
	)
}
