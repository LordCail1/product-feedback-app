import Image from "next/image";
import IconComments from "@/assets/svg/IconComments.svg"

export default function NumberCommentsIndicator() {
    return (
        <div className="flex absolute p-1 top-16 right-8 items-center">
            <Image src={IconComments} alt="" className="mr-2"/>
            <span>3</span>

        </div>
    )
}