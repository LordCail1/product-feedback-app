"use client"

import { Provider } from "react-redux"
import { setupStore } from "@/store/store"
import React from "react"

type Props = {
	children: React.ReactNode
}


export default function ReduxProvider({ children }: Props) {
	return <Provider store={setupStore()}>{children}</Provider>
}
