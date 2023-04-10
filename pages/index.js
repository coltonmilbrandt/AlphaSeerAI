import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import { useRouter } from "next/router"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>AlphaSeer AI</title>
				<meta
					name="Your AI Finance Assistant"
					content="Cutting edge AI Finance"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</Head>
			<Navbar />
			<Hero />
		</>
	)
}
