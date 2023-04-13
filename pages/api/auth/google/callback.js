import jwt from "jsonwebtoken"
import passport from "passport"
import { GoogleStrategyConfig } from "../../../../server"

passport.use(GoogleStrategyConfig)

export default async (req, res) => {
	console.log("arrived at callback route")
	passport.authenticate("google", { session: false }, async (err, user) => {
		if (err) {
			console.log("Callback Error: authenticate returned error")
			console.error(err)
			return res.redirect(`/error?error=${err.message}`)
		}

		if (!user) {
			const noUserError = "No user returned from Google"
			console.log(noUserError)
			return res.redirect(`/error?error=${noUserError}`)
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
