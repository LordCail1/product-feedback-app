import mongoose, {Schema} from "mongoose";


const productRequestSchema = new Schema({
    title: String,
    category: String,
    upvotes: Number,
    status: String,
    description: String,
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})

const ProductRequest = mongoose.models.ProductRequest || mongoose.model("ProductRequest", productRequestSchema)

export default ProductRequest