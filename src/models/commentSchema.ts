import { CommentBaseType } from "@/types"
import mongoose, { Schema } from "mongoose"

export const commentSchema = new Schema<CommentBaseType>({
	content: String,
	user: { type: Schema.Types.ObjectId, ref: "User" },
	replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
})

const CommentModel =
	mongoose.models.Comment || mongoose.model<CommentBaseType>("Comment", commentSchema)

export default CommentModel
