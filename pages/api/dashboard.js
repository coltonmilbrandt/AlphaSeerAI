import isAuthenticated from "../../middlewares/isAuthenticated"

export default function handler(req, res) {
	if (req.method === "GET") {
		isAuthenticated(req, res, () => {
			// Your dashboard logic here
			console.log("#######################")
			console.log("Got to dashboard route")
			res.status(200).json({ message: "Welcome to the dashboard!" })
		})
	} else {
		res.setHeader("Allow", "GET")
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
