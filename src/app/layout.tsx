import { ReactNode } from "react"
import ReduxProvider from "@/providers/ReduxProvider"
import { Toaster } from "@/components/ui/toaster"

type Props = {
	children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className="h-screen bg-ghost_white overflow-x-hidden w-screen">
				<ReduxProvider>
					{children}
					<Toaster/>
				</ReduxProvider>
			</body>
		</html>
	)
}
