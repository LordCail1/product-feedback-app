import { ReactNode } from "react"

type Props = {
    navbar: ReactNode
    feedbackList: ReactNode
}

export default function Layout({feedbackList, navbar}: Props) {
    return (
        <section className="relative lg:ml-8 flex basis-[825px] flex-col ml-0">
			{navbar}
            {feedbackList}
		</section>
    )
}