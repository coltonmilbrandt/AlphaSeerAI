import Head from "next/head"
import Navbar from "../components/navbar"
import { useRouter } from "next/router"
import Chart from "../components/chart"
import React from "react"

export default function Signup() {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>AlphaSeerAI - Sign Up</title>
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
				<div className="dark:bg-darkBG min-h-screen">
					<header className="bg-white dark:bg-darkHeader shadow">
						<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-200">
								Sign Up
							</h1>
						</div>
					</header>
					<main>
						<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
							{/* <!-- Replace with your content --> */}
							<div className="px-4 py-6 sm:px-0">
								<div className="h-96 rounded-lg">
									<div className="w-full max-w-xs">
										<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
											<div className="mb-4">
												<label
													className="block text-gray-700 text-sm font-bold mb-2"
													htmlFor="username"
												>
													Username
												</label>
												<input
													className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="username"
													type="text"
													placeholder="Username"
												/>
											</div>
											<div className="mb-6">
												<label
													className="block text-gray-700 text-sm font-bold mb-2"
													htmlFor="password"
												>
													Password
												</label>
												<input
													className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
													id="password"
													type="password"
													placeholder="******************"
												/>
												<p className="text-red-500 text-xs italic">
													Please choose a password.
												</p>
											</div>
											<div className="flex items-center justify-between">
												<button
													className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
													type="button"
												>
													Sign In
												</button>
												<a
													className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
													href="#"
												>
													Forgot Password?
												</a>
											</div>
										</form>
									</div>
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
