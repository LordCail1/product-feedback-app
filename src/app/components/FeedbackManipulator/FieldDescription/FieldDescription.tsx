import { FormDescription } from "@/components/ui/form"

type Props = {
	text: string
}

export default function FieldDescription({ text }: Props) {
	return (
		<FormDescription
			className="text-sm font-normal text-ocean_night mb-4"
		>
			{text}
		</FormDescription>
	)
}
