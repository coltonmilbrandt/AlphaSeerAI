// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const express = require("express")
const mysql2 = require("mysql2")
const app = express()

const pool = mysql2.createPool({
	host: "localhost",
	user: "root",
	password: "sparklyvision21",
	database: "gem",
})

app.get("/", function (req, res) {
	pool.getConnection(function (err, connection) {
		if (err) throw err // not connected!
		console.log("Connected as ID " + connection.threadId)
		res.send("Successfully connected to MySQL database")
		connection.release()
	})
})

app.listen(3001, function () {
	console.log("Server is running on port 3001")
})
