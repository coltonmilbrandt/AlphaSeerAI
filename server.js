const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const cors = require("cors")
const cookieSession = require("cookie-session")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const dotenv = require("dotenv")
const morgan = require("morgan") // makes it so every request shows in console
dotenv.config({ path: ".env.local" })
const router = express.Router()

const app = express()
app.use(cors())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
	console.log("Connected to MongoDB")
})

// Logging
if (process.env.NODE_ENV === "development") {
	// if development, log requests with morgan
	app.use(morgan("dev"))
	console.log("Logging enabled")
}

// User schema and model
const userSchema = new mongoose.Schema({
	googleId: String,
	displayName: String,
	email: String,
})

const User =
	mongoose.connection.models.User || mongoose.model("User", userSchema)

// Check if User model exists before defining it
if (!mongoose.connection.models.User) {
	mongoose.model("User", userSchema)
}

// Passport setup
const GoogleStrategyConfig = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: "/api/auth/google/callback",
		passReqToCallback: true, // this code breaks, so that profile.id is undefined
	},
	async (req, accessToken, refreshToken, profile, done) => {
		console.log("profile ID:", profile.id)
		let existingUser = await User.findOne({ googleId: profile.id })

		console.log("accessToken:", accessToken)
		console.log("refreshToken:", refreshToken)
		console.log("profile:", profile)
		console.log("existingUser:", existingUser)
		console.log("reqQueryState:", req.query.state)

		if (existingUser) {
			// If the user exists, log the user in
			done(null, existingUser)
		} else {
			// If the user doesn't exist, create a new user
			const newUser = await new User({
				googleId: profile.id,
				displayName: profile.displayName,
				email: profile.emails[0].value,
			}).save()

			done(null, newUser)
		}
	}
)

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id)
	done(null, id)
})

// Middlewares
app.use(passport.initialize())
app.use(passport.session())
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [process.env.COOKIE_KEY],
	})
)

// Start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

// Export the GoogleStrategyConfig
module.exports = { GoogleStrategyConfig }
