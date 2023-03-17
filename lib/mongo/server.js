const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan") // makes it so every request shows in console
// const exphbs = require("express-handlebars")
const connectDB = require("../../config/db.js")

// Load config
dotenv.config({ path: "./config/config.env" })

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === "development") {
	// if development, log requests with morgan
	app.use(morgan("dev"))
}

// // Handlebars
// app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
// app.set("view engine", ".hbs")

// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("../../routes/index.js"))

const PORT = process.env.PORT || 3001

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
)
