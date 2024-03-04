import { Button, Stack } from "@mui/material"

const SearchButton = () => {
    return (
        <Stack style={{ padding: 10 }}>
            <Button variant="contained" color="db" size="large" disableElevation style={{ textTransform: 'none', fontSize: 20 }}>
                Suchen
            </Button>
        </Stack>
    )
}

export default SearchButton