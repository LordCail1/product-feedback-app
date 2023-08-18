import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { ProductRequestBaseType, ProductRequestModelType } from "@/types"
import { productRequestValidator } from "@/validators/productRequestValidator"
import { ZodError } from "zod"
import connectMongoose from "@/lib/connectMongoose"
import ProductRequestModel from "@/models/productRequestSchema"

/**Post a feedback request */
export async function POST(request: NextRequest) {
	let res: ProductRequestBaseType
	try {
		res = await request.json()
	} catch (error) {
		return NextResponse.json(
			{ message: "failed to parse JSON object" },
			{ status: 400 }
		)
	}

	let validateData: {
		category: "all" | "UI" | "UX" | "enhancement" | "bug" | "feature"
		comments?: string[] | undefined
		description: string
		hasBeenUpvoted: boolean
		status: "suggestion" | "planned" | "in-progress" | "live"
		title: string
		upvotes: number
	}

	try {
		validateData = productRequestValidator.parse(res)
	} catch (error) {
		const zodError = error as ZodError
		const errorMessage = zodError.errors
			.map((err) => err.message)
			.join(", ")
		return NextResponse.json(
			{ message: `Invalid data submitted, ${errorMessage}` },
			{ status: 400 }
		)
	}

	const { category, description, status, title, upvotes } = res

	try {
		await connectMongoose()
		const productRequest: ProductRequestModelType =
			new ProductRequestModel({
				title,
				category,
				upvotes,
				status,
				description,
			})
		await productRequest.save()
		return NextResponse.json({ message: "success" }, { status: 200 })
	} catch (error) {
		console.log("failed to create user in the database.", error)
		return NextResponse.error()
	}
}
