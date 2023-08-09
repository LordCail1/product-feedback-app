"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import IconArrowUpBlue from "@/assets/svg/IconArrowUpBlue.svg"

export default function UpvoteBtn() {
	return (
		<Button
			variant="secondary"
			className="relative ml-8 mt-7 flex h-auto flex-col pb-2 pt-4 hover:bg-pale_phthalo_blue bg-cotton_ball"
			onClick={() => console.log("you clicked the button")}
		>
			<Image
				src={IconArrowUpBlue}
				alt=""
				className="mb-2"
			/>
			<span className="text-jewel_cave">26</span>
		</Button>
	)
}
