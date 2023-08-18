import IconComments from "@/assets/svg/IconComments.svg"
import Image from "next/image"

type Props = {
	count: number | undefined
}

export default function NumberCommentsIndicator({ count }: Props) {
	return (
		<div className="bottom-8 right-6 translate-y-0 absolute md:transform md:-translate-y-1/2 md:right-8 md:top-1/2  flex items-center p-1">
			<Image
				alt=""
				className="mr-2"
				src={IconComments}
			/>
			<span>{count ? count : 0}</span>
		</div>
	)
}
