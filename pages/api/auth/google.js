import passport from "passport"
import { GoogleStrategyConfig } from "../../../server"

passport.use(GoogleStrategyConfig)

export default (req, res) => {
	passport.authenticate("google", { scope: ["profile", "email"] })(req, res)
}
