import ProductRequestModel from "@/models/productRequestSchema"
import { ProductRequestBaseType } from "@/types"
import connectMongoose from "./connectMongoose"

export default async function getAllProductRequests(): Promise<
	ProductRequestBaseType[]
> {
	try {
		await connectMongoose()
		const feedbacks: ProductRequestBaseType[] =
			await ProductRequestModel.find()
		return feedbacks
	} catch (error) {
		console.log("there was an error fetching all product requests", error)
	}

	return []
}
