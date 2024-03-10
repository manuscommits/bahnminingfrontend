import { Box, Button, Card } from "@mui/material"
import { parseRecon } from "../utils/reconHelper"
import { useDispatch } from "react-redux"
import { setSelectedRecon } from "../redux/verbindungsanfrageSlice"

const VerbindungAnzeige = ({ recon }) => {
    const dispatch = useDispatch()
    const verbindungsAbschnitte = parseRecon(recon)

    return (
        <Card style={{ padding: 10, marginTop: 8, marginBottom: 8 }}>
            {verbindungsAbschnitte.map(verbindungsAbschnitt =>
                <Box style={{ padding: 5 }} key={JSON.stringify(verbindungsAbschnitt)}>
                    <Box>{verbindungsAbschnitt["abfahrtsZeit"].format("HH:mm") + " - " + verbindungsAbschnitt["abfahrtsHalt"]}</Box>
                    <Box>{verbindungsAbschnitt["ankunftsZeit"].format("HH:mm") + " - " + verbindungsAbschnitt["ankunftsHalt"]}</Box>
                </Box>
            )}
            <Box>
                <Button onClick={() => dispatch(setSelectedRecon(recon))}>Select</Button>
            </Box>
        </Card>
    )
}

export default VerbindungAnzeige