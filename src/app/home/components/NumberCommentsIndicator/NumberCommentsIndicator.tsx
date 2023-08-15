import IconComments from "@/assets/svg/IconComments.svg"
import Image from "next/image"

type Props = {
	count: number | undefined
}

export default function NumberCommentsIndicator({ count }: Props) {
	return (
		<div className="absolute right-8 top-16 flex items-center p-1">
			<Image
				alt=""
				className="mr-2"
				src={IconComments}
			/>
			<span>{count ? count : 0}</span>
		</div>
	)
}
