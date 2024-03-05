import { Box, Stack } from "@mui/material"

const VerbindungenAnzeige = () => {
    const recons = []

    return (
        <Stack>
            {recons.map(recon => {
                <Box>{recon}</Box>
            })}
        </Stack>
    )
}

export default VerbindungenAnzeige