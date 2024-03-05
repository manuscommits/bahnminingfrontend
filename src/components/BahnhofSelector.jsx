import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useBahnhofSuggestions from '../hooks/useBahnhofSuggestions';
import { useDispatch } from 'react-redux'
import { setAbfahrtsHalt, setAnkunftsHalt } from '../redux/verbindungsanfrageSlice';

const BahnhofSelector = () => {
    const dispatch = useDispatch()
    const { suggestions: vonSuggestions, getSuggestions: getVonSuggestions } = useBahnhofSuggestions()
    const { suggestions: nachSuggestions, getSuggestions: getNachSuggestions } = useBahnhofSuggestions()

    return (
        <Stack direction="row" spacing={3} style={{ padding: 10 }}>
            <Autocomplete
                id="abfahrt-bahnhof-input"
                style={{ width: 400 }}
                onChange={(_, newValue) => dispatch(setAbfahrtsHalt(newValue))}
                onInputChange={(_, value) => getVonSuggestions(value)}
                options={vonSuggestions}
                getOptionLabel={(option) => option["name"]}
                renderInput={(params) => <TextField {...params} label="Von" />}
                filterOptions={(options) => options}
                isOptionEqualToValue={() => true}
            />
            <Autocomplete
                id="ankunft-bahnhof-input"
                style={{ width: 400 }}
                onChange={(_, newValue) => dispatch(setAnkunftsHalt(newValue))}
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