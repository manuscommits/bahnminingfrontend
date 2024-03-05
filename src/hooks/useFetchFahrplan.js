import { useDispatch, useSelector } from "react-redux"
import fetchFahrplanAngebote from "../utils/fetchFahrplanAngebote"
import { setResponse } from "../redux/verbindungsanfrageSlice"

const useFetchFahrplan = () => {
    const dispatch = useDispatch()
    const { abfahrtsHalt, ankunftsHalt, anfrageZeitpunkt, nurDirektverbindungen, pagingReference } = useSelector((state) => state.verbindungsanfrage)

    const fetchFahrplan = () => {
        if (abfahrtsHalt && ankunftsHalt && anfrageZeitpunkt) {
            fetchFahrplanAngebote(abfahrtsHalt.id, ankunftsHalt.id, anfrageZeitpunkt, nurDirektverbindungen, pagingReference)
                .then(response => dispatch(setResponse(response)))
        }
    }

    return fetchFahrplan
}

export default useFetchFahrplan