"use client"

import { Button } from "@/components/ui/button"
import IconPlus from "@/assets/svg/IconPlus.svg"
import Image from "next/image"
import Link from "next/link"

export default function CreateFeedbackLink() {
	return (
		<Button
			className="ml-auto flex items-center bg-singapore_orchid hover:bg-after_party_pink"
			asChild
			
		>
			<Link href="/createFeedback">
				<Image
					src={IconPlus}
					alt=""
					className="mr-2"
				/>
				Add Feedback
			</Link>
		</Button>
	)
}
