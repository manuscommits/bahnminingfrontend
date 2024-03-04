
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useBahnhofSuggestions from '../hooks/useBahnhofSuggestions';
import { useState } from 'react';

const BahnhofSelector = () => {
    const [value, setValue] = useState(null);

    const { suggestions: vonSuggestions, getSuggestions: getVonSuggestions } = useBahnhofSuggestions()
    const { suggestions: nachSuggestions, getSuggestions: getNachSuggestions } = useBahnhofSuggestions()

    console.log(value)

    return (
        <Stack direction="row" spacing={3}>
            <Autocomplete
                id="abfahrt-bahnhof-input"
                style={{width: 400}}
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
                onInputChange={(_, value) => getVonSuggestions(value)}
                options={vonSuggestions}
                getOptionLabel={(option) => option["name"]}
                renderInput={(params) => <TextField {...params} label="Von" />}
                filterOptions={(options) => options}
                isOptionEqualToValue={() => true}
            />
            <Autocomplete
                id="ankunft-bahnhof-input"
                style={{width: 400}}
                onInputChange={(_, value) => getNachSuggestions(value)}
                options={nachSuggestions}
                getOptionLabel={(option) => option["name"]}
                renderInput={(params) => <TextField {...params} label="Nach" />}
                filterOptions={(options) => options}
                isOptionEqualToValue={() => true}
            />
        </Stack>
    )
}

export default BahnhofSelector