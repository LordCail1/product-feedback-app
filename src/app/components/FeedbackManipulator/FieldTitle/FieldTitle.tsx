import { FormLabel } from "@/components/ui/form"

type Props = {
	text: string
}

export default function FieldTitle({ text }: Props) {
	return (
		<FormLabel className="text-sm font-bold text-jewel_cave">
			{text}
		</FormLabel>
	)
}
