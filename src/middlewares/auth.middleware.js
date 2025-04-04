import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Authentication required",
			});
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = {
			_id: decoded._id,
			user_id: decoded.userId,
			name: decoded.name,
			email: decoded.email,
		};
		next();
	} catch (error) {
		return res.status(401).json({
			success: false,
			message: "Invalid or expired token",
		});
	}
};

export default  auth ;
