import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../db/models/user.model.js";

const userSignUp = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists with this email",
			});
		}

		const hashedPassword = await bcrypt.hash(password.toString(), 10);

		const newUser = await User.create({
			user_id: uuidv4(),
			name,
			email,
			password: hashedPassword,
		});

		return res.status(201).json({
			success: true,
			message: "User created successfully",
			user: newUser,
		});
	} catch (error) {
		console.log("Error while signup : ", error.message);
		res.status(500).json({
			success: false,
			message: "Internal Server error",
		});
	}
};

const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found with this email",
			});
		}

		const isPasswordValid = await bcrypt.compare(
			password.toString(),
			user.password
		);
		if (!isPasswordValid) {
			return res.status(401).json({
				success: false,
				message: "Invalid password",
			});
		}

		const token = jwt.sign(
			{
				_id: user._id,
				userId: user.user_id,
				name: user.name,
				email: user.email,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "24h" }
		);

		return res.status(200).json({
			success: true,
			message: "Login successfull",
			token,
			user: user,
		});
	} catch (error) {
		console.log("Error while login : ", error.message);
		res.status(500).json({
			success: false,
			message: "Internal Server error",
		});
	}
};

const getUser = async (req, res) => {
	try {
		const user = req.user;

		res.status(200).json({
			success: true,
			message: "Authenticated user",
			user: user,
		});
	} catch (error) {
		console.log("Error while getting user :", error.message);
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

const userController = {
	userSignUp,
	userLogin,
	getUser,
};

export default userController;
