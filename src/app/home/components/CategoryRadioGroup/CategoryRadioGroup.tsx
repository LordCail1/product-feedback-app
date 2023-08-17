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
	className,
	defaultValue,
}: Props) {
	return (
		<RadioGroup
			className={className}
			defaultValue={defaultValue}
		>
			{children}
		</RadioGroup>
	)
}
