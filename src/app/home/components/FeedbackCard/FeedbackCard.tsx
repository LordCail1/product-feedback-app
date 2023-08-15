"use client"

import { Badge } from "@/components/ui/badge"
import { Category } from "@/types"
import NumberCommentsIndicator from "../NumberCommentsIndicator/NumberCommentsIndicator"
import UpvoteBtn from "@/app/components/UpvoteBtn/UpvoteBtn"

type Props = {
	category: Category
	commentCount: number | undefined
	description: string
	title: string
	upVotes: number,
}

export default function FeedbackCard({
	category,
	description,
	title,
	upVotes,
	commentCount,
}: Props) {
	return (
		<div className="relative mb-5 flex w-full shrink-0 basis-36 items-start rounded-xl bg-white">
			<UpvoteBtn count={upVotes} />
			<div className="ml-10 mt-8 flex flex-col items-start">
				<h3 className="mb-1 text-lg font-bold">{title}</h3>
				<span className="mb-3 text-base font-normal text-ocean_night">
					{description}
				</span>
				<Badge className="mb-3 flex grow-0 items-center justify-center rounded-lg bg-cotton_ball px-4 py-1 text-sm font-semibold capitalize text-rainbow_fish transition-colors hover:bg-cotton_ball">
					{category}
				</Badge>
			</div>
			<NumberCommentsIndicator count={commentCount}/>
		</div>
	)
}
