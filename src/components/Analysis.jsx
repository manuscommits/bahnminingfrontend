import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import useReconPriceHistory from "../hooks/useReconPriceHistory"
import Chart from "./Chart"

const Analysis = () => {
    const selectedRecon = useSelector(state => state.verbindungsanfrage.selectedRecon)
    const reconPriceHistory = useReconPriceHistory(selectedRecon)

    if (!selectedRecon) return
    if (!reconPriceHistory || !reconPriceHistory.priceHistory) return <Box>Keine Daten!</Box>
    const priceHistory = reconPriceHistory.priceHistory
    const xAxisValues = priceHistory.map(entry => entry["t"] * 1000)
    const yAxisValues = priceHistory.map(entry => entry["p"])

    return (
        <Box>
            <Chart xAxisValues={xAxisValues} yAxisValues={yAxisValues} />
        </Box>
    )
}

export default Analysis