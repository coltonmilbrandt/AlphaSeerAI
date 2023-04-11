import jwt from "jsonwebtoken"
import passport from "passport"
import { GoogleStrategyConfig } from "../../../../server"

passport.use(GoogleStrategyConfig)

export default async (req, res) => {
	passport.authenticate("google", { session: false }, async (err, user) => {
		if (err) {
			console.log("Callback Error: authenticate returned error")
			console.error(err)
			return res.redirect("/error")
		}

		if (!user) {
			console.log("Callback Error: No user returned from Google")
			return res.redirect("/dashboard")
		}

		// Create a JWT for the user ID
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
			expiresIn: "30d",
		})

		// Set the JWT as a cookie
		res.setHeader(
			"Set-Cookie",
			`token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax`
		)

		// Redirect the user to the dashboard on successful login
		res.redirect("/dashboard")
	})(req, res)
}
