import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form"
import { FeedbackField } from "@/types"
import React from "react"
import { FieldError } from "react-hook-form"
import FieldTitle from "../../FieldTitle/FieldTitle"
import FieldDescription from "../../FieldDescription/FieldDescription"
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
	control: any
	error: FieldError | undefined
	name: FeedbackField
}

export default function FeedbackUpdateStatusFormField({
	control,
	error,
	name,
}: Props) {
	return (
		<FormField
			control={control.control}
			name={name}
			render={({ field }) => (
				<FormItem className="mb-6">
					<FieldTitle text="Update Status" />
					<FieldDescription text="Change feedback state" />

					<Select
						onValueChange={field.onChange}
						defaultValue={field.value}
					>
						<FormControl>
							<SelectTrigger className="border-transparent bg-ghost_white transition-colors hover:border-solid hover:border-rainbow_fish focus:ring-1">
								<SelectValue defaultValue="feature"/>
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							<SelectItem
								value="suggestion"
								className="py-4 text-base font-normal"
							>
								Suggestion
							</SelectItem>
							<SelectSeparator className="my-0" />
							<SelectItem
								value="planned"
								className="py-4 text-base font-normal"
							>
								Planned
							</SelectItem>
							<SelectSeparator className="my-0" />
							<SelectItem
								value="in-progress"
								className="py-4 text-base font-normal"
							>
								In-Progress
							</SelectItem>
							<SelectSeparator className="my-0" />
							<SelectItem
								value="live"
								className="py-4 text-base font-normal"
							>
								Live
							</SelectItem>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
