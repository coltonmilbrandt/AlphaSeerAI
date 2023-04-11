import Head from "next/head"
import { Inter } from "@next/font/google"
import Navbar from "../components/navbar"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Dashboard() {
	const router = useRouter()
    const errorMessage = router.query.error

    return (
		<>
			<Head>
                <title>AlphaSeer AI - Error</title>
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
								Error
							</h1>
						</div>
					</header>
					<main>
						<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
							<div className="px-4 py-6 sm:px-0">
								<div className="h-96 rounded-lg">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-neutral-200">
                                        Error
                                    </h1>
                                    <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-200">
                                        Something went wrong.
                                    </p>
                                    <p className="text-xl tracking-tight text-gray-700 dark:text-neutral-400">
                                        {errorMessage || "An unknown error occurred."}
                                    </p>
                                    <a href="/login">
                                        <button className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
                                            Login
                                        </button>
                                    </a>
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
