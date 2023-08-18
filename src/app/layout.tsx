import { ReactNode } from "react"
import ReduxProvider from "@/providers/ReduxProvider"

type Props = {
	children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className="h-screen bg-ghost_white overflow-x-hidden w-screen">
				<ReduxProvider>
					{children}
				</ReduxProvider>
			</body>
		</html>
	)
}
