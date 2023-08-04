import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userSchema";
import connectMongoose from "@/libs/connectMongoose";
import { HydratedDocument } from "mongoose";

export async function POST(request: NextRequest) {
	console.log('that ran')
    try {
		await connectMongoose()
		const user: User = await User.create({
			image: "image1",
			name: "Rami",
			username: "peper",
		})
		
		


		console.log('yo')
		return Response.json({user: user})
	} catch (error) {
		console.log('failed to create user in the database.', error)
	}
} 









