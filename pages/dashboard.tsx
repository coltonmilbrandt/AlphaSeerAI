import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import Link from "next/link"
import Navbar from "../components/navbar"
import { useRouter } from "next/router"
import { createChart } from "lightweight-charts"
import Chart from "../components/chart"
import React, { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Dashboard() {
	const router = useRouter()

	useEffect(() => {
		fetch('/api/dashboard')
			.then((response) => {
			if (response.status === 401) {
				router.push('/login');
			}
		})
		.catch((error) => console.error('Error fetching data:', error));
	}, []);

	return (
		<>
			<Head>
				<title>AlphaSeer AI - Dashboard</title>
				<meta
					name="Your AI Finance Assistant"
					content="Cutting edge AI Finance"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="text-xl">
				<Navbar />
				{/* <!--
  This example requires updating your template:

  ```
  <html className="h-full bg-gray-100">
  <body className="h-full">
  ```
--> */}
				<div className="min-h-full">
					<header className="bg-white shadow">
						<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900">
								Dashboard
							</h1>
						</div>
					</header>
					<main>
						<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
							{/* <!-- Replace with your content --> */}
							<div className="px-4 py-6 sm:px-0">
								<div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
									{/* <Chart /> */}
								</div>
							</div>
							{/* <!-- /End replace --> */}
						</div>
					</main>
				</div>
			</main>
		</>
	)
}
