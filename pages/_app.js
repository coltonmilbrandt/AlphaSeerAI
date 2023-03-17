import "@/styles/globals.css"
import styles from "../dist/output.css"

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />
}
