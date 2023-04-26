const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const cors = require("cors")
const cookieSession = require("cookie-session")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const dotenv = require("dotenv")
const morgan = require("morgan")
dotenv.config({ path: ".env.local" })
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

// Error handling for routes
app.use((err, req, res, next) => {
	console.error(`Error occurred in ${req.method} ${req.url}: ${err.stack}`)
	res.status(500).send("An internal error occurred.")
})

// Set PORT based on environment
const PORT =
	process.env.NODE_ENV === "development" ? 3001 : process.env.PORT || 3001

const startServer = () => {
	const server = app.listen(PORT, () => {
		console.log(`Server running on port ${server.address().port}`)
	})

	server.on("error", (err) => {
		if (err.code === "EADDRINUSE") {
			console.error(`Port ${PORT} is already in use.`)
			console.log(err)
		} else {
			console.error(`Server error: ${err}`)
		}
	})

	const handleShutdown = () => {
		console.log("Shutting down server...")
		server.close(() => {
			console.log("Server closed.")
			process.exit(0)
		})
	}

	process.on("SIGINT", handleShutdown)
	process.on("SIGTERM", handleShutdown)
}

startServer()

module.exports = { GoogleStrategyConfig }
