"use client"

import { Button } from "@/components/ui/button"
import IconArrowUpBlue from "@/assets/svg/IconArrowUpBlue.svg"
import IconArrowUpWhite from "@/assets/svg/IconArrowUpWhite.svg"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
	count: number
	handleUpvote: () => Promise<void>
	hasBeenUpvoted: boolean
}

export default function UpvoteBtn({
	count,
	handleUpvote,
	hasBeenUpvoted,
}: Props) {
	return (
		<Button
			className={cn(
				"absolute bottom-4 left-6 mt-7 flex h-auto items-center bg-cotton_ball hover:bg-pale_phthalo_blue md:relative md:bottom-0 md:left-0 md:ml-8 md:flex-col md:pt-4",
				{
					"bg-rainbow_fish": hasBeenUpvoted,
					"hover:bg-rainbow_fish": hasBeenUpvoted,
				}
			)}
			onClick={handleUpvote}
			variant="secondary"
		>
			<Image
				alt=""
				className="mr-2 md:mb-2 md:mr-0"
				src={hasBeenUpvoted ? IconArrowUpWhite : IconArrowUpBlue}
			/>
			<span
				className={cn("text-jewel_cave", { "text-white": hasBeenUpvoted })}
			>
				{count}
			</span>
		</Button>
	)
}
