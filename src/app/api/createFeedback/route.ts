import { NextRequest, NextResponse } from "next/server"
import UserModel from "@/models/userSchema"
import connectMongoose from "@/lib/connectMongoose"
import { ProductRequest, User } from "@/types"
import ProductRequestModel from "@/models/productRequestSchema"

export async function POST(request: NextRequest) {
	const res: ProductRequest = await request.json()
	console.log("response in server", res)
	const { title, category, upvotes, status, description } = res

	try {
		await connectMongoose()
		const productRequest: ProductRequest = new ProductRequestModel({
			title,
			category,
			upvotes,
			status,
			description,
		})
		await productRequest.save()

		// const user: User = await UserModel.create({
		// 	image: "image1",
		// 	name: "Rami",
		// 	username: "peper",
		// })

		return NextResponse.json({ user: "hello" })
	} catch (error) {
		console.log("failed to create user in the database.", error)
	}
}
