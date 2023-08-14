import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form"
import { FeedbackField } from "@/types"
import { FieldError } from "react-hook-form"
import { Input } from "@/components/ui/input"
import FieldDescription from "../../FieldDescription/FieldDescription"
import FieldTitle from "../../FieldTitle/FieldTitle"

type Props = {
	control: any
	error: FieldError | undefined
	name: FeedbackField
}

export default function FeedbackTitleFormField({
	name,
	control,
	error,
}: Props) {
	return (
		<FormField
			control={control.control}
			name={name}
			render={({ field }) => (
				<FormItem className="mb-6">
					<FieldTitle text="Feedback Title" />
					<FieldDescription text="Add a short, descriptive headline" />
					<FormControl>
						<Input
							{...field}
							className={
								"bg-ghost_white text-base font-normal transition-colors hover:border-solid hover:border-rainbow_fish border-transparent focus-visible:ring-1"
							}
							style={{
								borderColor: error ? "red" : "",
								borderWidth: error ? "2px" : "",
								borderStyle: error ? "solid" : "",
							}}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
