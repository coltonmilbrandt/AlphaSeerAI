import { createChart, TradingView } from "lightweight-charts"
// import { createCanvas } from "canvas"

export default function Chart() {
	// const canvas = createCanvas(1024, 1024)
	// const chart = createChart(canvas, { width: 1024, height: 1024 })
	// const candleSeries = chart.addCandlestickSeries()
	// const symbol = "OANDA:SPX500USD"
	// const resolution = "D"
	// const libraryPath = "https://unpkg.com/lightweight-charts/dist/"
	// const tvWidget = new TradingView.widget({
	// 	symbol: symbol,
	// 	interval: resolution,
	// 	container_id: "tv_chart_container",
	// 	library_path: libraryPath,
	// 	locale: "en",
	// 	fullscreen: false,
	// 	autosize: true,
	// 	studies: [
	// 		{
	// 			name: "SMA",
	// 			inputs: { length: 20 },
	// 			overlay: true,
	// 			type: "SMA",
	// 		},
	// 	],
	// })
	// tvWidget.onChartReady(() => {
	// 	const chartWidget = tvWidget.chart()
	// 	const study = chartWidget.createStudy("SMA", false, true, [20])
	// 	chart.applyStudies()
	// 	chartWidget.takeScreenshot().then((image) => {
	// 		fs.writeFileSync("spx-chart.png", image, "base64")
	// 		console.log("Chart saved as spx-chart.png")
	// 	})
	// })
	// return (
	// 	<div>
	// 		<canvas
	// 			ref={(ref) =>
	// 				ref ? canvas.transferControlToOffscreen() : null
	// 			}
	// 		/>
	// 		<div id="tv_chart_container"></div>
	// 	</div>
	// )
}
