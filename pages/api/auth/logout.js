// Logout functionality
export default async (req, res) => {
	res.setHeader(
		"Set-Cookie",
		`token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Lax`
	)
	res.redirect("/")
	res.status(200).json({ message: "Logged out" })
}
