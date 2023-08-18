import mongoose from "mongoose"




export default async function connectMongoose() {
	try {
		mongoose.connect(process.env.MONGO_URI as string)
		console.log("connected to mongoDB database!")
	} catch (error) {
		console.log(
			"an error occured connecting to the mongoDB database!",
			error
		)
	}
}
