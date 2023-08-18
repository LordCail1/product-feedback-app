import desktopBackgroundHeaderImage from "@/assets/desktopBackgroundHeaderImage.png"
import Image from "next/image"

export default function FeedbackBoardTitleDesktop() {
	return (
		<div className="relative mb-6 flex-grow basis-1/3 lg:ml-0 lg:h-32 lg:basis-[137px]">
			<Image
				alt=""
				className="rounded-xl"
				fill
				priority={true}
				src={desktopBackgroundHeaderImage}
			/>
			<h2 className="relative ml-6 mt-16 text-xl font-bold text-white">
				Frontend Mentor
			</h2>
			<span className="ml-6 inline-block text-sm font-medium text-white opacity-75">
				Feedback Board
			</span>
		</div>
	)
}
