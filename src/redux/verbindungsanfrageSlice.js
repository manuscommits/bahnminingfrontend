import { createSlice } from '@reduxjs/toolkit'

export const verbindungsanfrageSlice = createSlice({
    name: 'verbindungsanfrage',
    initialState: {
        abfahrtsHalt: "",
        ankunftsHalt: "",
        anfrageZeitpunkt: "",
        nurDirektverbindungen: false,
        pagingReference: ""
    },
    reducers: {
        setAbfahrtsHalt: (state, action) => {
            state.abfahrtsHalt = action.payload
        },
        setAnkunftsHalt: (state, action) => {
            state.ankunftsHalt = action.payload
        },
        setAnfrageZeitpunkt: (state, action) => {
            state.anfrageZeitpunkt = action.payload
        },
        setNurDirektverbindungen: (state, action) => {
            state.nurDirektverbindungen = action.payload
        },
        setPagingReference: (state, action) => {
            state.pagingReference = action.payload
        }
    },
})

export const { setAbfahrtsHalt, setAnkunftsHalt, setAnfrageZeitpunkt, setNurDirektverbindungen, setPagingReference } = verbindungsanfrageSlice.actions

export default verbindungsanfrageSlice.reducer