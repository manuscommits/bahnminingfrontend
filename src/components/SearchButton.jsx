import { Button, Stack } from "@mui/material"
import useFetchFahrplan from "../hooks/useFetchFahrplan"

const SearchButton = () => {
    const fetchFahrplan = useFetchFahrplan()
    
    return (
        <Stack style={{ padding: 10 }}>
            <Button
                variant="contained"
                color="db"
                size="large"
                disableElevation
                style={{ textTransform: 'none', fontSize: 20 }}
                onClick={fetchFahrplan}
            >
                Suchen
            </Button>
        </Stack>
    )
}

export default SearchButton