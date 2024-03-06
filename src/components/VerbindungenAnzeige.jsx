import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import VerbindungAnzeige from "./VerbindungAnzeige"

const VerbindungenAnzeige = () => {
    const response = useSelector((state) => state.verbindungsanfrage.response) || {}
    const verbindungen = response["verbindungen"] || []
    const recons = verbindungen.map(verbindung => verbindung["ctxRecon"])

    return (
        <Stack direction="column">
            {recons.map(recon =>
                <VerbindungAnzeige recon={recon} />
            )}
        </Stack>
    )
}

export default VerbindungenAnzeige