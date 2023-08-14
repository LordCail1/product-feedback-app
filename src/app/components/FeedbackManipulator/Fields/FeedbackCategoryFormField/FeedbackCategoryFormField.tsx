import { FeedbackField } from "@/types"
import { FieldError } from "react-hook-form"
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import FieldDescription from "../../FieldDescription/FieldDescription"
import FieldTitle from "../../FieldTitle/FieldTitle"

type Props = {
	control: any
	name: FeedbackField
}

export default function FeedbackCategoryFormField({
	name,
	control,
}: Props) {
	return (
		<FormField
			control={control.control}
			name={name}
			render={({ field }) => (
				<FormItem className="mb-6">
					<FieldTitle text="Category" />
					<FieldDescription text="Choose a category for your feedback" />
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
								value="feature"
								className="py-4 text-base font-normal"
							>
								Feature
							</SelectItem>
							<SelectSeparator className="my-0" />
							<SelectItem
								value="UI"
								className="py-4 text-base font-normal"
							>
								UI
							</SelectItem>
							<SelectSeparator className="my-0" />
							<SelectItem
								value="UX"
								className="py-4 text-base font-normal"
							>
								UX
							</SelectItem>
							<SelectSeparator className="my-0" />
							<SelectItem
								value="enhancement"
								className="py-4 text-base font-normal"
							>
								Enhancement
							</SelectItem>
							<SelectSeparator className="my-0" />
							<SelectItem
								value="bug"
								className="py-4 text-base font-normal"
							>
								Bug
							</SelectItem>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
