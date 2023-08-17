import Image from "next/image"
import desktopBackgroundHeaderImage from "@/assets/desktopBackgroundHeaderImage.png"

export default function FeedbackBoardTitleMobile() {
	return (
		<div className="relative flex-grow basis-1/3 md:mb-6 md:hidden lg:ml-0 lg:h-32 lg:basis-[137px]">
			<Image
				src={desktopBackgroundHeaderImage}
				alt=""
				fill
				priority={true}
			/>
			<h2 className="relative ml-6 mt-4 text-xl font-bold text-white">
				Frontend Mentor
			</h2>
			<span className="mb-4 ml-6 inline-block text-sm font-medium text-white opacity-75">
				Feedback Board
			</span>
		</div>
	)
}
