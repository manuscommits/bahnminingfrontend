import { Box, Button, Card, CardActions, CardContent, Collapse, IconButton, Typography, styled } from "@mui/material"
import { parseRecon } from "../utils/reconHelper"
import { useDispatch } from "react-redux"
import { setSelectedRecon } from "../redux/verbindungsanfrageSlice"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const VerbindungAnzeige = ({ recon }) => {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch()
    const verbindungsAbschnitte = parseRecon(recon) || []
    const abfahrtsZeit = verbindungsAbschnitte[0]["abfahrtsZeit"]
    const ankunftsZeit = verbindungsAbschnitte[verbindungsAbschnitte.length - 1]["ankunftsZeit"]
    const durationHours = ankunftsZeit.diff(abfahrtsZeit, "hour")
    const durationMinutes = ankunftsZeit.diff(abfahrtsZeit, "minute") % 60
    const duration = `${durationHours}h ${durationMinutes}min`
    const anzahlUmstiege = verbindungsAbschnitte.length - 1
    const umstiege = anzahlUmstiege === 0 ? "" : (" | " + anzahlUmstiege + " " + (anzahlUmstiege === 1 ? "Umstieg" : "Umstiege"))


    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card style={{ marginTop: 8, marginBottom: 8 }}>
            <CardContent>
                <Typography variant="h6" display="inline" fontWeight="bold">
                    {abfahrtsZeit.format("HH:mm") + " - " + ankunftsZeit.format("HH:mm")}
                </Typography>
                <Typography display="inline" >
                    {"  |  " + duration + umstiege}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ height: 20 }}>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Button onClick={() => dispatch(setSelectedRecon(recon))}>Select</Button>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {verbindungsAbschnitte.map(verbindungsAbschnitt =>
                    <Box style={{ padding: 5 }} key={JSON.stringify(verbindungsAbschnitt)}>
                        <Box>{verbindungsAbschnitt["abfahrtsZeit"].format("HH:mm") + " - " + verbindungsAbschnitt["abfahrtsHalt"]}</Box>
                        <Box>{verbindungsAbschnitt["ankunftsZeit"].format("HH:mm") + " - " + verbindungsAbschnitt["ankunftsHalt"]}</Box>
                    </Box>
                )}
            </Collapse>
        </Card>
    )
}

export default VerbindungAnzeige