import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setAnfrageZeitpunkt } from '../redux/verbindungsanfrageSlice';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const DateTimePicker = () => {
    const dispatch = useDispatch()
    const [abfahrtsdatum, setAbfahrtsdatum] = useState()
    const [abfahrtszeit, setAbfahrtszeit] = useState()
    console.log(abfahrtsdatum, abfahrtszeit)

    useEffect(() => {
        if (abfahrtsdatum && abfahrtszeit) {
            dispatch(setAnfrageZeitpunkt(abfahrtsdatum + "T" + abfahrtszeit))
        }
    }, [abfahrtsdatum, abfahrtszeit])

    return (
        <Stack direction="row" spacing={3} style={{ padding: 10 }}>
            <DatePicker
                label="Abfahrtsdatum"
                format="DD.MM.YYYY"
                onChange={(newValue) => setAbfahrtsdatum(dayjs(newValue).format("YYYY-MM-DD"))}
            />
            <TimePicker
                label="Uhrzeit"
                ampm={false}
                onChange={(newValue) => setAbfahrtszeit(dayjs(newValue).format("HH:mm:00"))}
            />
        </Stack>
    )
}

export default DateTimePicker