import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Hero() {
	return (
		<>
			<div className="isolate bg-white">
				<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
				<main>
					<div className="relative px-6 lg:px-8">
						<div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
							<div>
								<div className="hidden sm:mb-8 sm:flex sm:justify-center">
									<div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
										<span className="text-gray-600">
											Why those who don't use AI will be
											left in the dust.{" "}
											<a
												href="#"
												className="font-semibold text-indigo-600"
											>
												<span
													className="absolute inset-0"
													aria-hidden="true"
												></span>
												Read more{" "}
												<span aria-hidden="true">
													&rarr;
												</span>
											</a>
										</span>
									</div>
								</div>
								<div>
									<h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
										Get Tomorrow's Alpha Today.
									</h1>
									<p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
										Use&nbsp;AlphaSeer&nbsp;to&nbsp;see&nbsp;into&nbsp;the&nbsp;future&nbsp;with&nbsp;AI-powered&nbsp;charts,&nbsp;and&nbsp;analyze
										emerging&nbsp;facts&nbsp;and&nbsp;sentiment&nbsp;quicker&nbsp;than&nbsp;ever&nbsp;before.
									</p>
									<div className="mt-8 flex gap-x-4 sm:justify-center">
										<a
											href="#"
											className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
										>
											Get started
											<span
												className="text-indigo-200"
												aria-hidden="true"
											>
												&rarr;
											</span>
										</a>
										<Link
											href="/dashboard"
											className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
										>
											Dashboard
										</Link>
									</div>
								</div>
								<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
									<svg
										className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
										viewBox="0 0 1155 678"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
											fill-opacity=".3"
											d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
										/>
										<defs>
											<linearGradient
												id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
												x1="1155.49"
												x2="-78.208"
												y1=".177"
												y2="474.645"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="#9089FC"></stop>
												<stop
													offset="1"
													stop-color="#FF80B5"
												></stop>
											</linearGradient>
										</defs>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
