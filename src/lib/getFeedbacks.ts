import ProductRequestModel from "@/models/productRequestSchema"
import { ProductRequestBaseType } from "@/types"
import connectMongoose from "./connectMongoose"

export default async function getFeedbacks(): Promise<
	ProductRequestBaseType[]
> {
	try {
        await connectMongoose()
		const feedbacks: ProductRequestBaseType[] =
			await ProductRequestModel.find({}, null, {maxTimeMS: 30000})
		return feedbacks
	} catch (error) {
		console.log("there was an error fetching all product requests", error)
	}

	return []
}
