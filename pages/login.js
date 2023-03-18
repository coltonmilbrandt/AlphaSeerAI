import Head from "next/head"
import Navbar from "../components/navbar"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Chart from "../components/chart"

// import the icons you need
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Login() {
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
				<div class="dark:bg-darkBG min-h-screen">
					<header class="bg-white dark:bg-darkHeader shadow">
						<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
							<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-200">
								Login
							</h1>
						</div>
					</header>
					<main>
						<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
							<div class="px-4 py-6 sm:px-0">
								<div class="h-96 rounded-lg">
									<div class="w-full max-w-xs m-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
										<form>
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
										<div className="border-t-2 mb-6 mt-6"></div>
										<div className="space-y-2">
											<div class="flex justify-center space-x-2">
												<button
													type="button"
													data-te-ripple-init
													data-te-ripple-color="light"
													class="flex items-center w-full rounded bg-[#eb4132] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
												>
													<FontAwesomeIcon
														icon={faGoogle}
														size="lg"
														className="mr-3"
													/>
													Log In with Google
												</button>
											</div>
											<div class="flex justify-center space-x-2 ">
												<button
													type="button"
													data-te-ripple-init
													data-te-ripple-color="light"
													class="flex items-center w-full rounded bg-[#1877f2] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
												>
													<FontAwesomeIcon
														icon={faFacebook}
														size="lg"
														className="mr-3"
													/>
													Log In with Facebook
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</main>
		</>
	)
}
