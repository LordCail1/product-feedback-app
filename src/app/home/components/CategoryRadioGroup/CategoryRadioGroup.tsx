import { RadioGroup } from "@/components/ui/radio-group"
import { Category } from "@/types"
import React from "react"

type Props = {
	children: React.ReactNode
	defaultValue: Category
	className: string
}

export default function CategoryRadioGroup({
	children,
	defaultValue,
	className,
}: Props) {
	return (
		<RadioGroup
			defaultValue={defaultValue}
			className={className}
		>
			{children}
		</RadioGroup>
	)
}
