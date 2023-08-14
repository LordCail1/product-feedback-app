import { FeedbackField } from "@/types"
import { FieldError } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import {FormControl,FormField,FormItem,FormMessage,} from "@/components/ui/form"
import FieldDescription from "../../FieldDescription/FieldDescription"
import FieldTitle from "../../FieldTitle/FieldTitle"

type Props = {
	control: any
	error: FieldError | undefined
	name: FeedbackField
}

export default function FeedbackDetailFormField({ name, control, error }: Props) {
	return (
		<FormField
			control={control.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FieldTitle text="Feedback Detail" />
					<FieldDescription
						text="Include any specific comments on what should be improved,
						added, etc."
					/>
					<FormControl>
						<Textarea
							{...field}
							className="h-24 resize-none bg-ghost_white text-base font-normal border-transparent transition-colors hover:border-solid hover:border-rainbow_fish focus-visible:ring-1"
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
