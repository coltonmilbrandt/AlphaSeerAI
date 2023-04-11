import passport from "passport"
import jwt from "jsonwebtoken"
import { GoogleStrategyConfig } from "../../../../server"

passport.use(GoogleStrategyConfig)

export default (req, res) => {
	passport.authenticate("google", (err, user) => {
		if (err) {
			console.error(err)
			return res.redirect("/login")
		}

		if (!user) {
			// Redirect the user back to the login page on unsuccessful login
			return res.redirect("/login")
		}

		req.logIn(user, (err) => {
			if (err) {
				console.error(err)
				return res.redirect("/login")
			}

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

			// Redirect the user to the dashboard on successful login
			res.redirect("/dashboard")
		})
	})(req, res)
}
