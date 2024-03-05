import { configureStore } from '@reduxjs/toolkit'
import verbindungsanfrageReducer from "./verbindungsanfrageSlice"

export default configureStore({
    reducer: {
        verbindungsanfrage: verbindungsanfrageReducer
    },
})