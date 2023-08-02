import Image from "next/image"
import desktopBackgroundHeaderImage from "@/assets/desktopBackgroundHeaderImage.png"

export default function Page() {
	return (
		<div className="relative h-32 basis-[137px] mb-6">
			<Image
				src={desktopBackgroundHeaderImage}
				alt=""
				fill
				className="-z-10 rounded-xl"
			/>
			<h2 className="ml-6 mt-16 text-xl font-bold text-white">
				Frontend Mentor
			</h2>
			<span className="ml-6 inline-block text-sm font-medium text-white opacity-75">
				Feedback Board
			</span>
		</div>
	)
}
