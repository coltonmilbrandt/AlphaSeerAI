import passport from "passport"
import { GoogleStrategyConfig } from "../../../../server"

passport.use(GoogleStrategyConfig)

export default (req, res, next) => {
	console.log("arrived at signup route")
	passport.authenticate("google", {
		scope: ["profile", "email"],
		state: "signup",
	})(req, res, next)
}
