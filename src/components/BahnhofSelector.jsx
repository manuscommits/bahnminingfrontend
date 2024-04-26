import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useBahnhofSuggestions from '../hooks/useBahnhofSuggestions';
import { useDispatch } from 'react-redux'
import { setAbfahrtsHalt, setAnkunftsHalt } from '../redux/verbindungsanfrageSlice';

const defaultAbfahrtsHalt = {
    "name": "Frankfurt(Main)Hbf",
    "id": "A=1@O=Frankfurt(Main)Hbf@X=8663785@Y=50107149@U=80@L=8000105@B=1@p=1709144512@i=U×008011068@",
    "extId": "8000105",
    "type": "ST"
}
const defaultAnkunftsHalt = {
    "name": "München Hbf",
    "id": "A=1@O=München Hbf@X=11558339@Y=48140229@U=80@L=8000261@B=1@p=1709144512@i=U×008020347@",
    "extId": "8000261",
    "type": "ST"
}

const BahnhofSelector = () => {
    const dispatch = useDispatch()
    const { suggestions: vonSuggestions, getSuggestions: getVonSuggestions } = useBahnhofSuggestions()
    const { suggestions: nachSuggestions, getSuggestions: getNachSuggestions } = useBahnhofSuggestions()

    return (
        <Stack direction="row" spacing={3} style={{ padding: 10 }}>
            <Autocomplete
                id="abfahrt-bahnhof-input"
                style={{ width: 400 }}
                defaultValue={defaultAbfahrtsHalt}
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
                defaultValue={defaultAnkunftsHalt}
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