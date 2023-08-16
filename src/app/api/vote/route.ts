import connectMongoose from "@/lib/connectMongoose"
import { NextRequest, NextResponse } from "next/server"
import ProductRequestModel from "@/models/productRequestSchema"
import { ProductRequestModelType } from "@/types"

export async function PUT(request: NextRequest) {
	let res: { id: string }
	try {
		res = await request.json()
	} catch (error) {
		console.log("there was an error parsing the request body", error)
		return NextResponse.json(
			{ message: "there was an error parsing the request body" },
			{ status: 400 }
		)
	}
	try {
		connectMongoose()
	} catch (error) {
		console.log(
			"There was an error connecting to the mongoDB database",
			error
		)
		return NextResponse.json(
			{ message: "There was an error connecting to the mongoDB database" },
			{ status: 500 }
		)
	}
	let productRequest: ProductRequestModelType | null

	try {
		productRequest = await ProductRequestModel.findById(res.id)
		if (!productRequest) {
			console.log("There was an error finding the product request")
			return NextResponse.json(
				{ message: "There was an error finding the product request" },
				{ status: 500 }
			)
		}
	} catch (error) {
		console.log("there was an error finding the product request", error)
		return NextResponse.json(
			{ message: "There was an error finding the product request" },
			{ status: 500 }
		)
	}

	try {
		productRequest.upvotes += 1
        productRequest.hasBeenUpvoted = true
		await productRequest.save()
	} catch (error) {
		console.log("there was an error saving the product request", error)
		return NextResponse.json(
			{ message: "There was an error saving the product request" },
			{ status: 500 }
		)
	}

	return NextResponse.json({
		message: { message: "success", productRequest },
	})
}
