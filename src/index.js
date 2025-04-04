const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routers/auth.router");
const userRouter = require("./routers/user.router");
const connectDB = require("./db/connect");

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
