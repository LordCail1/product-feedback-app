"use client"


import { Button } from "@/components/ui/button"
import IconArrowUpBlue from "@/assets/svg/IconArrowUpBlue.svg"
import Image from "next/image"

type Props = {
	count: number
}

export default function UpvoteBtn({count}: Props) {
	return (
		<Button
			className="relative ml-8 mt-7 flex h-auto flex-col pb-2 pt-4 hover:bg-pale_phthalo_blue bg-cotton_ball"
			onClick={() => console.log("you clicked the button")}
			variant="secondary"
		>
			<Image
				alt=""
				className="mb-2"
				src={IconArrowUpBlue}
			/>
			<span className="text-jewel_cave">{count}</span>
		</Button>
	)
}
