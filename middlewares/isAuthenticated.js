import jwt from "jsonwebtoken"

const isAuthenticated = (req, res, next) => {
	const token = req.cookies.token
	console.log("isAuthenticated: ", req.cookies)

	if (!token) {
		return res.status(401).json({ message: "Unauthorized" })
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.userId = decoded.userId
		return next()
	} catch (err) {
		return res.status(401).json({ message: "Unauthorized" })
	}
}

export default isAuthenticated
