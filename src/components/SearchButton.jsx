import { Button, Stack } from "@mui/material"
import useFetchFahrplan from "../hooks/useFetchFahrplan"
import SearchIcon from '@mui/icons-material/Search'

const SearchButton = () => {
    const { fetchFahrplan, loading } = useFetchFahrplan()

    return (
        <Stack style={{ padding: 10 }}>
            <Button
                variant="contained"
                color="db"
                size="large"
                disableElevation
                style={{ textTransform: 'none', fontSize: 20 }}
                onClick={fetchFahrplan}
                startIcon={<SearchIcon />}
                disabled={loading}
            >
                Suchen
            </Button>
        </Stack>
    )
}

export default SearchButton