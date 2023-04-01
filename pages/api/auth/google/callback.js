import passport from "passport"
import jwt from "jsonwebtoken"
import { GoogleStrategyConfig } from "../../../../server"

passport.use(GoogleStrategyConfig)

export default (req, res) => {
	passport.authenticate(
		"google",
		{ failureRedirect: "/login" },
		(err, user) => {
			if (err) {
				console.log("error:", err)
				res.status(400).send(err)
			} else {
				console.log("user:", user)

				// Create a JWT for the user ID
				const token = jwt.sign(
					{ userId: user._id },
					process.env.JWT_SECRET,
					{
						expiresIn: "30d",
					}
				)

				// Set the JWT as a cookie
				res.setHeader(
					"Set-Cookie",
					`token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax`
				)

				// Redirect the user to the home page
				res.redirect("/dashboard")
			}
		}
	)(req, res)
}
