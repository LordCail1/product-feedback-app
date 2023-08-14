"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import FeedbackCategoryFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackCategoryFormField/FeedbackCategoryFormField"
import FeedbackDetailFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackDetailFormField/FeedbackDetailFormField"
import FeedbackTitleFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackTitleFormField/FeedbackTitleFormField"
import IconNewFeedback from "@/assets/svg/IconNewFeedback.svg"
import Image from "next/image"
import Link from "next/link"
import IconArrowLeft from "@/assets/svg/IconArrowLeft.svg"
import { ProductRequest } from "@/types"

const FormSchema = z.object({
	title: z.string().min(1, "Can't be empty"),
	category: z.enum(["UI", "UX", "enhancement", "bug", "feature"]),
	feedbackDetail: z.string().min(1, "Can't be empty"),
})

export default function FeedbackManipulator() {
	const router = useRouter()
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: "",
			category: "feature",
			feedbackDetail: "",
		},
	})

	const {
		formState: { errors },
	} = form

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log("data in onSubmit function", data)
		const body: ProductRequest = {
			title: data.title,
			category: data.category,
			upvotes: 0,
			status: "suggestion",
			description: data.feedbackDetail,
		}

		const res = await fetch("/api/createFeedback", {
			method: "POST",
			body: JSON.stringify(body)
		})

		if (!res.ok) throw new Error("Something went wrong")

		router.back()
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="absolute left-1/2 top-1/2 flex h-[650px] w-[540px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl bg-white px-11"
			>
				<Image
					src={IconNewFeedback}
					alt=""
					className="absolute -top-7"
				/>
				<Link
					href="/home"
					className="absolute left-0 flex items-center -top-20"
				>
					<Image
						src={IconArrowLeft}
						alt=""
					/>
					<span className="ml-4 text-ocean_night font-bold text-sm hover:underline">Go Back</span>
				</Link>
				<h1 className="pb-10 pt-12 text-2xl font-bold">
					Create New Feedback
				</h1>
				<FeedbackTitleFormField
					control={form}
					error={errors.title}
					name="title"
				/>
				<FeedbackCategoryFormField
					control={form}
					name="category"
				/>
				<FeedbackDetailFormField
					name="feedbackDetail"
					control={form}
					error={errors.feedbackDetail}
				/>
				<div className="mt-8 flex justify-end">
					<Button
						type="button"
						className="bg-jewel_cave text-sm font-bold hover:bg-ocean_night"
						onClick={() => router.back()}
					>
						Cancel
					</Button>
					<Button
						type="submit"
						className="ml-4 rounded-lg bg-singapore_orchid text-sm font-bold hover:bg-after_party_pink"
					>
						Add Feedback
					</Button>
				</div>
			</form>
		</Form>
	)
}
