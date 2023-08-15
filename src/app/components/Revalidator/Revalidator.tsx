"use client"


import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

type Props = {
	children: React.ReactNode
}
export default function Revalidator({ children }: Props) {
    const router  = useRouter()

    useEffect(() => { 
        router.refresh()
    },[])
    
	return <>{children}</>

}
