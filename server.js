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
const GoogleStrategyConfig = require("./config/passport")

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
const PORT = process.env.PORT || 3009
const server = app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

server.on("error", (err) => {
	console.error(`Server error: ${err}`)
})

process.on("SIGTERM", () => {
	console.log("Shutting down server...")
	server.close(() => {
		console.log("Server closed.")
		process.exit(0)
	})
})

// Export the GoogleStrategyConfig
module.exports = { GoogleStrategyConfig }
