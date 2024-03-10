import { Box } from "@mui/material"
import { LineChart } from "@mui/x-charts"
import dayjs from "dayjs";

const Chart = ({ xAxisValues, yAxisValues }) => {
    return (
        <Box>
            <LineChart
                xAxis={[{
                    label: "Datum",
                    data: xAxisValues,
                    scaleType: "time",
                    valueFormatter: value => dayjs(value).format("DD.MM"),
                    tickMinStep: 24 * 60 * 60 * 1000,
                }]}
                yAxis={[{ id: 'linearAxis', scaleType: 'linear', label: "Preis", min: 0 }]}
                series={[{ data: yAxisValues, curve: "linear", connectNulls: true, showMark: false }]}
                width={800}
                height={300}
            />
        </Box>
    )
}

export default Chart