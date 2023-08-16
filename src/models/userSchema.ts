import { UserBaseType } from "@/types"
import mongoose, { Schema } from "mongoose"

export const userSchema = new Schema<UserBaseType>({
	image: String,
	name: String,
	username: String,
})

const UserModel =
	mongoose.models.User || mongoose.model<UserBaseType>("User", userSchema)

export default UserModel
