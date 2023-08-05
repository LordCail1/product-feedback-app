import { NextRequest, NextResponse } from "next/server"
import UserModel from "@/models/userSchema"
import connectMongoose from "@/libs/connectMongoose"
import { HydratedDocument } from "mongoose"
import { User } from "@/types"

export async function POST(request: NextRequest) {
	try {
		await connectMongoose()
		const user: User = await UserModel.create({
			image: "image1",
			name: "Rami",
			username: "peper",
		})

		return Response.json({ user: user })
	} catch (error) {
		console.log("failed to create user in the database.", error)
	}
}
