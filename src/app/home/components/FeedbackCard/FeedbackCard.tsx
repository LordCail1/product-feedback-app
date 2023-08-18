"use client"

import { Badge } from "@/components/ui/badge"
import { Category } from "@/types"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import NumberCommentsIndicator from "../NumberCommentsIndicator/NumberCommentsIndicator"
import UpvoteBtn from "@/app/components/UpvoteBtn/UpvoteBtn"
import Link from "next/link"

type Props = {
	category: Category
	commentCount: number | undefined
	description: string
	hasBeenUpvoted: boolean
	id?: string
	title: string
	upVotes: number
}

export default function FeedbackCard({
	category,
	commentCount,
	description,
	hasBeenUpvoted,
	id,
	title,
	upVotes,
}: Props) {
	const [isFetching, setIsFetching] = useState(false)
	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	const isMutation = isFetching || isPending

	async function handleUpvote() {
		setIsFetching(true)
		try {
			const res = await fetch(`http://localhost:3000/api/vote`, {
				method: "PUT",
				body: JSON.stringify({ id }),
				headers: {
					"Content-Type": "application/json",
				},
			})
			if (!res.ok) throw new Error("Something went wrong")
			const data = await res.json()
		} catch (error) {
			console.log("something went wrong when sending the request", error)
		}
		setIsFetching(false)
		startTransition(() => {
			router.refresh()
		})
	}

	return (
		<Link href={`/createFeedback/${id}`} className="relative mx-6 mb-5 flex shrink-0 basis-52 cursor-pointer items-start rounded-xl bg-white md:mx-0 md:w-full md:basis-36">
			<UpvoteBtn
				count={upVotes}
				handleUpvote={handleUpvote}
				hasBeenUpvoted={hasBeenUpvoted}
			/>
			<div className="ml-6 mt-8 flex flex-col items-start md:ml-10">
				<h3 className="mb-1 text-lg font-bold">{title}</h3>
				<span className="mb-3 text-base font-normal text-ocean_night">
					{description}
				</span>
				<Badge className="mb-3 flex grow-0 items-center justify-center rounded-lg bg-cotton_ball px-4 py-1 text-sm font-semibold capitalize text-rainbow_fish transition-colors hover:bg-cotton_ball">
					{category}
				</Badge>
			</div>
			<NumberCommentsIndicator count={commentCount} />
		</Link>
	)
}
