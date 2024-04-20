import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setAnfrageZeitpunkt } from '../redux/verbindungsanfrageSlice';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const DateTimePicker = () => {
    const dispatch = useDispatch()
    const defaultTimestamp = dayjs()
    const [abfahrtsDatum, setAbfahrtsDatum] = useState(defaultTimestamp.format("YYYY-MM-DD"))
    const [abfahrtsZeit, setAbfahrtsZeit] = useState(defaultTimestamp.format("HH:mm:00"))

    useEffect(() => {
        if (abfahrtsDatum && abfahrtsZeit) {
            dispatch(setAnfrageZeitpunkt(abfahrtsDatum + "T" + abfahrtsZeit))
        } else {
            dispatch(setAnfrageZeitpunkt(null))
        }
    }, [dispatch, abfahrtsDatum, abfahrtsZeit])

    return (
        <Stack direction="row" spacing={3} style={{ padding: 10 }}>
            <DatePicker
                label="Abfahrtsdatum"
                format="DD.MM.YYYY"
                defaultValue={defaultTimestamp}
                onChange={(newValue) => setAbfahrtsDatum(dayjs(newValue).format("YYYY-MM-DD"))}
            />
            <TimePicker
                label="Uhrzeit"
                defaultValue={defaultTimestamp}
                ampm={false}
                onChange={(newValue) => setAbfahrtsZeit(dayjs(newValue).format("HH:mm:00"))}
            />
        </Stack>
    )
}

export default DateTimePicker