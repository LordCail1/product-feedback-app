import { ProductRequestBaseType } from "@/types";
import mongoose, {Schema} from "mongoose";



const productRequestSchema = new Schema<ProductRequestBaseType>({
    title: String,
    category: String,
    upvotes: Number,
    status: String,
    description: String,
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})

const ProductRequestModel = mongoose.models.ProductRequest || mongoose.model("ProductRequest", productRequestSchema)

export default ProductRequestModel