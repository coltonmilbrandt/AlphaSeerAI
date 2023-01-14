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
				<title>GoSumé</title>
				<meta
					name="Land a better job"
					content="AI Driven Resume Builder"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Hero />
		</>
	)
}
