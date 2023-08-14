import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<section className="relative h-screen bg-ghost_white">
			<Skeleton className="absolute left-1/2 top-1/2 h-[650px] w-[540px] -translate-x-1/2 -translate-y-1/2 transform rounded-xl">
				
			</Skeleton>
		</section>
	)
}
