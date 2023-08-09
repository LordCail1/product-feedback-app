import ReduxProvider from "@/providers/ReduxProvider"

type Props = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
