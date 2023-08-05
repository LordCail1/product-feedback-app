import { User } from "@/types"
import mongoose, { Schema } from "mongoose"

export const userSchema = new Schema<User>({
	image: String,
	name: String,
	username: String,
})

const UserModel =
	mongoose.models.User || mongoose.model<User>("User", userSchema)

export default UserModel
