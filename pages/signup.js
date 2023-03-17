import Head from "next/head"
import Navbar from "../components/navbar"
import { useRouter } from "next/router"
import Chart from "../components/chart"

export default function Signup() {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>GemAI</title>
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
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
--> */}
				<div class="dark:bg-darkBG min-h-screen">
					<header class="bg-white dark:bg-darkHeader shadow">
						<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
							<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-200">
								Sign Up
							</h1>
						</div>
					</header>
					<main>
						<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
							{/* <!-- Replace with your content --> */}
							<div class="px-4 py-6 sm:px-0">
								<div class="h-96 rounded-lg">
									<div class="w-full max-w-xs">
										<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
											<div class="mb-4">
												<label
													class="block text-gray-700 text-sm font-bold mb-2"
													for="username"
												>
													Username
												</label>
												<input
													class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													id="username"
													type="text"
													placeholder="Username"
												/>
											</div>
											<div class="mb-6">
												<label
													class="block text-gray-700 text-sm font-bold mb-2"
													for="password"
												>
													Password
												</label>
												<input
													class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
													id="password"
													type="password"
													placeholder="******************"
												/>
												<p class="text-red-500 text-xs italic">
													Please choose a password.
												</p>
											</div>
											<div class="flex items-center justify-between">
												<button
													class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
													type="button"
												>
													Sign In
												</button>
												<a
													class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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
