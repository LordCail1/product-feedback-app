"use client"

import { Button } from "@/components/ui/button"
import { FeedbackEditingType, ProductRequestBaseType } from "@/types"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import FeedbackCategoryFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackCategoryFormField/FeedbackCategoryFormField"
import FeedbackDetailFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackDetailFormField/FeedbackDetailFormField"
import FeedbackTitleFormField from "@/app/components/FeedbackManipulator/Fields/FeedbackTitleFormField/FeedbackTitleFormField"
import FeedbackUpdateStatusFormField from "./Fields/FeedbackUpdateStatusFormField/FeedbackUpdateStatusFormField"
import IconArrowLeft from "@/assets/svg/IconArrowLeft.svg"
import IconNewFeedback from "@/assets/svg/IconNewFeedback.svg"
import Image from "next/image"
import Link from "next/link"

type Props = {
	editing: boolean
	feedbackEditingType?: FeedbackEditingType
}

const ProductRequestFormSchema = z.object({
	title: z
		.string()
		.min(1, "Can't be empty")
		.max(50, "Can't be more than 50 characters!"),
	category: z.enum(["UI", "UX", "enhancement", "bug", "feature"]),
	feedbackDetail: z
		.string()
		.min(1, "Can't be empty")
		.max(500, "Can't be more than 500 characters!"),
	feedbackStatus: z.enum(["suggestion", "planned", "in-progress", "live"]),
})

export default function FeedbackManipulator({
	feedbackEditingType,
	editing,
}: Props) {
	const router = useRouter()
	const [isFetching, setIsFetching] = useState(false)
	const { toast } = useToast()

	const form = useForm<z.infer<typeof ProductRequestFormSchema>>({
		resolver: zodResolver(ProductRequestFormSchema),
		defaultValues: {
			title: editing ? feedbackEditingType?.title : "",
			category: editing ? feedbackEditingType?.category : "feature",
			feedbackDetail: editing ? feedbackEditingType?.description : "",
			feedbackStatus: editing ? feedbackEditingType?.status : "suggestion",
		},
	})

	const {
		formState: { errors },
	} = form

	async function onSubmit(data: z.infer<typeof ProductRequestFormSchema>) {
		setIsFetching(true)
		try {
			if (editing) {
				if (
					feedbackEditingType?.title &&
					feedbackEditingType?.category &&
					feedbackEditingType?.status &&
					feedbackEditingType?.description &&
					feedbackEditingType._id
				) {
					const body: ProductRequestBaseType = {
						_id: feedbackEditingType._id,
						category: data.category,
						description: data.feedbackDetail,
						hasBeenUpvoted: feedbackEditingType.hasBeenUpvoted,
						status: data.feedbackStatus,
						title: data.title,
						upvotes: feedbackEditingType.upvotes,
					}
					const res = await fetch(`/api/productRequest`, {
						method: "PUT",
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json",
						},
					})
					if (!res.ok) {
						toast({
							title: "Something went wrong!",
							description: `Please try again later. status code: ${res.status}`,
							variant: "destructive",
						})
						throw new Error("Something went wrong with the request")
					}
					toast({
						title: "Success!",
						description: "Your feedback has been updated",
					})
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

				const res = await fetch(`/api/productRequest`, {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json",
					},
				})

				if (!res.ok) {
					toast({
						title: "Something went wrong!",
						description: `Please try again later. status code: ${res.status}`,
						variant: "destructive",
					})
					throw new Error("Something went wrong with the request")
				}
				toast({
					title: "Success!",
					description: "Your feedback has been added",
				})
				router.push("/home")
			}
		} catch (error) {
			console.log("there was an error sending the data", error)
		}
		setIsFetching(false)
	}

	async function deleteProductRequest() {
		setIsFetching(true)
		try {
			const res = await fetch(
				`/api/productRequest?id=${feedbackEditingType?._id}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			if (!res.ok) {
				toast({
					title: "Something went wrong!",
					description: `Please try again later. status code: ${res.status}`,
					variant: "destructive",
				})
				throw new Error("Something went wrong with the request")
			}
		} catch (error) {
			console.log("Something went wrong sending the DELETE request", error)
		}
		toast({
			title: "Success!",
			description: "Your feedback has been deleted",
		})
		setIsFetching(false)
		router.push("/home")
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="absolute left-1/2 top-1/2 flex w-[540px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl bg-white px-11 pb-10"
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
					{editing ? "Edit Feedback" : "Create New Feedback"}
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
				{editing ? (
					<FeedbackUpdateStatusFormField
						control={form}
						error={errors.title}
						name="feedbackStatus"
					/>
				) : null}
				<FeedbackDetailFormField
					name="feedbackDetail"
					control={form}
					error={errors.feedbackDetail}
				/>
				<div className="mt-8 flex justify-end">
					{editing ? (
						<Button
							className="mr-auto bg-blood_moon text-sm font-bold"
							disabled={isFetching}
							onClick={deleteProductRequest}
							type="button"
							variant={"destructive"}
						>
							Delete
						</Button>
					) : null}
					<Button
						className="bg-jewel_cave text-sm font-bold hover:bg-ocean_night"
						disabled={isFetching}
						onClick={() => router.back()}
						type="button"
					>
						Cancel
					</Button>
					<Button
						className="ml-4 rounded-lg bg-singapore_orchid text-sm font-bold hover:bg-after_party_pink"
						disabled={isFetching}
						type="submit"
					>
						{editing ? "Update Feedback" : "Add Feedback"}
					</Button>
				</div>
			</form>
		</Form>
	)
}
