import mongoose, {Schema} from "mongoose";






const userSchema = new Schema<User>({
    image: String,
    name: String,
    username: String
})

const User = mongoose.models.User || mongoose.model<User>("User", userSchema)

export default User