import mongoose, { Schema } from "mongoose"

export const commentSchema = new Schema({
	content: String,
	user: { type: Schema.Types.ObjectId, ref: "User" },
	replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
})

const CommentModel =
	mongoose.models.Comment || mongoose.model("Comment", commentSchema)

export default CommentModel
