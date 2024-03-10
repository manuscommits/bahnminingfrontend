import { Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import VerbindungAnzeige from "./VerbindungAnzeige"

const VerbindungenAnzeige = () => {
    const { abfahrtsHalt, ankunftsHalt, response } = useSelector((state) => state.verbindungsanfrage) || {}

    if (!response) return
    const verbindungen = response["verbindungen"] || []
    const recons = verbindungen.map(verbindung => verbindung["ctxRecon"])

    return (
        <Stack direction="column" marginTop={3}>
            <Typography textAlign="center">{abfahrtsHalt["name"] + " - " + ankunftsHalt["name"]}</Typography>
            {recons.map(recon =>
                <VerbindungAnzeige recon={recon} key={recon} />
            )}
        </Stack>
    )
}

export default VerbindungenAnzeige