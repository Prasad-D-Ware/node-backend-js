import mongoose from "mongoose";

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		console.log("DB connected successfully!");
	} catch (error) {
		console.error("Error while connecting to DB", error);
		process.exit(1);
	}
};

export default connect;
