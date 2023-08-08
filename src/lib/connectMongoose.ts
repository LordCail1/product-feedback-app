import mongoose from "mongoose"

export default async function connectMongoose() {
	try {
		mongoose.connect("mongodb://db:27017/product-feedback-app")
		console.log("connected to mongoDB database!")
	} catch (error) {
		console.log(
			"an error occured connecting to the mongoDB database!",
			error
		)
	}
}
