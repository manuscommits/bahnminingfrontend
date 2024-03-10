import { useDispatch, useSelector } from "react-redux"
import fetchFahrplanAngebote from "../utils/fetchFahrplanAngebote"
import { setResponse } from "../redux/verbindungsanfrageSlice"
import { useState } from "react"

const useFetchFahrplan = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { abfahrtsHalt, ankunftsHalt, anfrageZeitpunkt, nurDirektverbindungen, pagingReference } = useSelector((state) => state.verbindungsanfrage)

    const fetchFahrplan = () => {
        if (abfahrtsHalt && ankunftsHalt && anfrageZeitpunkt) {
            setLoading(true)
            dispatch(setResponse(null))
            fetchFahrplanAngebote(abfahrtsHalt.id, ankunftsHalt.id, anfrageZeitpunkt, nurDirektverbindungen, pagingReference)
                .then(response => dispatch(setResponse(response)))
                .finally(() => setLoading(false))
        }
    }

    return { fetchFahrplan, loading }
}

export default useFetchFahrplan