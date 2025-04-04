import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import connectDB from "./db/connect.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
	res.json({
		message: "Hello World",
	});
});

app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
