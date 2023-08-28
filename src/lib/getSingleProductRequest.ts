import { ProductRequestBaseType } from "@/types"
import connectMongoose from "./connectMongoose"
import ProductRequestModel from "@/models/productRequestSchema"

export default async function getSingleProductRequest(
	id: string
): Promise<ProductRequestBaseType | null> {
	try {
		await connectMongoose()
		const feedback: ProductRequestBaseType | null = await ProductRequestModel.findById(id)
		return feedback
	} catch (error) {
		console.log("there was an error fetching the product request", error)
	}

	return null
}
