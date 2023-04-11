import Head from "next/head";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "../components/chart";
import { useState } from "react";
import Link from "next/link";
import React from "react";

// import the icons you need
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const router = useRouter();

  const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(null);
  const [usernameIsValid, setUsernameIsValid] = useState<boolean | null>(null);

  	return (
		<>
			<Head>
				<title>AlphaSeerAI - Login</title>
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
				<div className="dark:bg-darkBG min-h-screen">
					<header className="bg-white dark:bg-darkHeader shadow">
						<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-200">
								Login
							</h1>
						</div>
					</header>
					<main>
						<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
							<div className="px-4 py-6 sm:px-0">
								<div className="h-96 rounded-lg">
									<div className="w-full max-w-xs m-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
										<form>
											<div className="mb-4">
												<label
													className="block text-gray-700 text-sm font-bold mb-2"
													htmlFor="username"
												>
													Username
												</label>
												<input
													className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
														usernameIsValid ===
														false
															? "border-red-500"
															: ""
													}`}
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
													className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
														passwordIsValid ===
														false
															? "border-red-500"
															: ""
													}`}
													id="password"
													type="password"
													placeholder="******************"
												/>
												<p
													className={`text-red-500 text-xs italic ${
														passwordIsValid ===
														false
															? "block"
															: "hidden"
													}`}
												>
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
										<div className="border-t-2 mb-6 mt-6"></div>
										<div className="space-y-2">
										<a href="/api/auth/google/signup" className="w-full">
											<button
												type="button"
												className="flex items-center w-full rounded bg-[#eb4132] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
											>
												<FontAwesomeIcon icon={faGoogle} size="lg" className="mr-3" />
												Sign Up with Google
											</button>
										</a>
											<div className="flex justify-center space-x-2">
												<a
													href="/api/auth/google"
													className="w-full"
												>
													<button
														type="button"
														data-te-ripple-init
														data-te-ripple-color="light"
														className="flex items-center w-full rounded bg-[#eb4132] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
													>
														<FontAwesomeIcon
															icon={faGoogle}
															size="lg"
															className="mr-3"
														/>
														Log In with Google
													</button>
												</a>
											</div>
											<div className="flex justify-center space-x-2 ">
												<button
													type="button"
													data-te-ripple-init
													data-te-ripple-color="light"
													className="flex items-center w-full rounded bg-[#1877f2] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
