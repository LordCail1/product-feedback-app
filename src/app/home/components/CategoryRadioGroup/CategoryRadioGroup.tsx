import { RadioGroup } from "@/components/ui/radio-group"
import { RadioContainerCategory } from "@/types"
import React from "react"

type Props = {
	children: React.ReactNode
	defaultValue: RadioContainerCategory
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
