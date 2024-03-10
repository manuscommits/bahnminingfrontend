import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    abfahrtsHalt: {
        "name": "Frankfurt(Main)Hbf",
        "id": "A=1@O=Frankfurt(Main)Hbf@X=8663785@Y=50107149@U=80@L=8000105@B=1@p=1709144512@i=U×008011068@",
        "extId": "8000105",
        "type": "ST"
    },
    ankunftsHalt: {
        "name": "München Hbf",
        "id": "A=1@O=München Hbf@X=11558339@Y=48140229@U=80@L=8000261@B=1@p=1709144512@i=U×008020347@",
        "extId": "8000261",
        "type": "ST"
    },
    anfrageZeitpunkt: "2024-05-20T01:17:00",
    nurDirektverbindungen: false,
    pagingReference: "",
    response: null,
    selectedRecon: null
}

export const verbindungsanfrageSlice = createSlice({
    name: 'verbindungsanfrage',
    initialState: initialState,
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
        },
        setResponse: (state, action) => {
            state.response = action.payload
        },
        setSelectedRecon: (state, action) => {
            state.selectedRecon = action.payload
        }
    },
})

export const {
    setAbfahrtsHalt,
    setAnkunftsHalt,
    setAnfrageZeitpunkt,
    setNurDirektverbindungen,
    setPagingReference,
    setResponse,
    setSelectedRecon
} = verbindungsanfrageSlice.actions

export default verbindungsanfrageSlice.reducer