import ReduxProvider from "@/providers/ReduxProvider"
import { ReactNode } from "react"

type Props = {
	children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className="h-screen bg-ghost_white">
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
