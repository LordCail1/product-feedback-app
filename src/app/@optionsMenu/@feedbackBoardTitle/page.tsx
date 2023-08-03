import Image from "next/image"
import desktopBackgroundHeaderImage from "@/assets/desktopBackgroundHeaderImage.png"
import connectMongoose from "@/libs/connectMongoose"
import User from "@/models/userSchema"
import { HydratedDocument } from "mongoose"

export default async function Page() {
	try {
		await connectMongoose()
		const user: HydratedDocument<User> = await new User({
			image: "onetwothree",
			name: 533,
			username: "john"
		})
		user.name = 'timmy'
		await user.save()
		console.log('succesfully created a user in the database!')
	} catch (error) {
		console.log('failed to create user in the database.', error)
	}




	


	return (
		<div className="relative h-32 basis-[137px] mb-6">
			<Image
				src={desktopBackgroundHeaderImage}
				alt=""
				fill
				className="-z-10 rounded-xl"
			/>
			<h2 className="ml-6 mt-16 text-xl font-bold text-white">
				Frontend Mentor
			</h2>
			<span className="ml-6 inline-block text-sm font-medium text-white opacity-75">
				Feedback Board
			</span>
		</div>
	)
}
