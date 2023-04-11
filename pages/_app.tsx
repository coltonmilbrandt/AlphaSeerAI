import "../styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import React from "react"
// skip adding the CSS automatically since it's being imported above
config.autoAddCss = false

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />
}
