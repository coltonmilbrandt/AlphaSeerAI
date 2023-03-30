import passport from "passport"
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
				// Set a cookie or session to store the user ID or other data
				req.session.userId = user._id

				// Redirect the user to the home page
				res.redirect("/")
			}
		}
	)(req, res)
}
