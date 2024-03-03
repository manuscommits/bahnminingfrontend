
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useBahnhofSuggestions from '../hooks/useBahnhofSuggestions';

const BahnhofSelector = () => {
    const { getSuggestions, suggestions } = useBahnhofSuggestions()

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                onInput={event => getSuggestions(event.target.value)}
                id="free-solo-demo"
                freeSolo
                options={suggestions.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="freeSolo" />}
            />
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={suggestions.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </Stack>
    )
}

export default BahnhofSelector