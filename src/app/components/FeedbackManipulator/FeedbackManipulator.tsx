"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Category, ProductRequestBaseType, Status } from "@/types"
import { useForm } from "react-hook-form"
import {  useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import FeedbackCategoryFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackCategoryFormField/FeedbackCategoryFormField"
import FeedbackDetailFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackDetailFormField/FeedbackDetailFormField"
import FeedbackTitleFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackTitleFormField/FeedbackTitleFormField"
import IconArrowLeft from "@/assets/svg/IconArrowLeft.svg"
import IconNewFeedback from "@/assets/svg/IconNewFeedback.svg"
import Image from "next/image"
import Link from "next/link"

const FormSchema = z.object({
	title: z
		.string()
		.min(1, "Can't be empty")
		.max(50, "Can't be more than 50 characters!"),
	category: z.enum(["UI", "UX", "enhancement", "bug", "feature"]),
	feedbackDetail: z
		.string()
		.min(1, "Can't be empty")
		.max(500, "Can't be more than 500 characters!"),
})

type Props = {
	editing: boolean
	feedbackEditingType?: {
		_id: string
		title: string
		category: Category
		status: Status
		description: string
		upvotes: number
	}
}

export default function FeedbackManipulator({
	feedbackEditingType,
	editing,
}: Props) {
	const router = useRouter()
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: editing ? feedbackEditingType?.title : "",
			category: editing ? feedbackEditingType?.category : "feature",
			feedbackDetail: editing ? feedbackEditingType?.description : "",
		},
	})

	const {
		formState: { errors },
	} = form

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		
		try {
			if (editing) {
				if (
					feedbackEditingType?.title &&
					feedbackEditingType?.category &&
					feedbackEditingType?.status &&
					feedbackEditingType?.description &&
					feedbackEditingType?.upvotes &&
					feedbackEditingType._id
				) {
					const body: ProductRequestBaseType = {
						_id: feedbackEditingType._id,
						category: data.category,
						description: data.feedbackDetail,
						hasBeenUpvoted: false,
						status: feedbackEditingType.status,
						title: data.title,
						upvotes: feedbackEditingType.upvotes,
					}
					
					console.log('yo')
					const res = await fetch(`/api/productRequest`, {
						method: "PUT",
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json",
						},
					})
					const response = await res.json()
					console.log(response)

					if (!res.ok)
						throw new Error("Something went wrong with the request")
					router.push("/home")
				} else {
					throw new Error(
						"Some values are missing from the form to complete your request"
					)
				}
			} else {
				const body: ProductRequestBaseType = {
					title: data.title,
					category: data.category,
					upvotes: 0,
					hasBeenUpvoted: false,
					status: "suggestion",
					description: data.feedbackDetail,
				}

				const res = await fetch(
					`/api/productRequest`,
					{
						method: "POST",
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json",
						},
					}
				)

				if (!res.ok) throw new Error("Something went wrong")
				router.push("/home")
			}
		} catch (error) {
			console.log("there was an error sending the data", error)
		}
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
					className="absolute -top-20 left-0 flex items-center"
				>
					<Image
						src={IconArrowLeft}
						alt=""
					/>
					<span className="ml-4 text-sm font-bold text-ocean_night hover:underline">
						Go Back
					</span>
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
