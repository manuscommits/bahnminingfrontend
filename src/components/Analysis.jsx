import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import useReconPriceHistory from "../hooks/useReconPriceHistory"
import Chart from "./Chart"
import dayjs from "dayjs"

const Analysis = () => {
    const selectedRecon = useSelector(state => state.verbindungsanfrage.selectedRecon)
    const reconPriceHistory = useReconPriceHistory(selectedRecon)

    if (!selectedRecon) return
    if (!reconPriceHistory || !reconPriceHistory["a"] || !reconPriceHistory["h"]) return <Box>Keine Daten!</Box>
    const startDate = reconPriceHistory["a"]
    const priceHistory = reconPriceHistory["h"]

    const xAxisValues = [dayjs(startDate).unix() * 1000]
    Array(priceHistory.length - 1).fill(null).forEach(_ => {
        xAxisValues.push(dayjs(xAxisValues[xAxisValues.length - 1]).add(1, "day").unix() * 1000)
    })
    
    return (
        <Box>
            <Chart xAxisValues={xAxisValues} yAxisValues={priceHistory} />
        </Box>
    )
}

export default Analysis