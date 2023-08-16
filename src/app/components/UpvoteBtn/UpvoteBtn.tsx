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
				"relative ml-8 mt-7 flex h-auto flex-col bg-cotton_ball pb-2 pt-4 hover:bg-pale_phthalo_blue",
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
				className="mb-2"
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
