import DateTimePicker from "./DateTimePicker"
import BahnhofSelector from "./BahnhofSelector"
import SearchButton from "./SearchButton"
import VerbindungenAnzeige from "./VerbindungenAnzeige"
import { Stack } from "@mui/material"

const RequestInput = () => {
    return (
        <Stack maxWidth={1000}>
            <BahnhofSelector />
            <DateTimePicker />
            <SearchButton />
            <VerbindungenAnzeige />
        </Stack>
    )
}

export default RequestInput