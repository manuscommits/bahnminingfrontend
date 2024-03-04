import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const DateTimePicker = () => {
    const [value, setValue] = useState();

    return (
        <Stack direction="row" spacing={3} style={{ padding: 10 }}>
            <DatePicker
                label="Abfahrtsdatum"
                format="DD.MM.YYYY"
            />
            <TimePicker
                label="Uhrzeit"
                value={value}
                onChange={setValue}
                ampm={false}
            />
        </Stack>
    )
}

export default DateTimePicker