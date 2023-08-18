import Image from "next/image"
import desktopBackgroundHeaderImage from "@/assets/desktopBackgroundHeaderImage.png"
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn"


export default function FeedbackBoardTitleMobile() {
	return (
		<div className=" relative flex-grow basis-20 md:mb-6 md:hidden lg:ml-0 lg:h-32 lg:basis-[137px]">
			<HamburgerBtn/>
			<Image
				src={desktopBackgroundHeaderImage}
				alt=""
				fill
				priority={true}
			/>
			<h2 className="absolute text-xl font-bold text-white top-4 left-6">
				Frontend Mentor
			</h2>
			<span className="absolute inline-block text-sm font-medium text-white opacity-75 bottom-4 left-6">
				Feedback Board
			</span>
			
		</div>
	)
}
