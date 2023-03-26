import passport from "passport"
import nextConnect from "next-connect"

// Import your passport configuration
import "/config/passport.js"

const handler = nextConnect()
	.use(passport.initialize())
	.get(
		"/google",
		passport.authenticate("google", { scope: ["profile", "email"] })
	)
	.get(
		"/google/callback",
		passport.authenticate("google", { failureRedirect: "/login" }),
		(req, res) => {
			res.redirect("/dashboard")
		}
	)

export default handler
