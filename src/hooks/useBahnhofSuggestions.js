import { useMemo, useState } from "react"
import fetchWithProxy from "../utils/bahnProxy"
import useGetState from "./useGetState"
import simpleCache from "../utils/simpleCache"

// eslint-disable-next-line
const exampleSuggestion = {
    "name": "Augsburg Hbf",
    "id": "A=1@O=Augsburg Hbf@X=10885568@Y=48365444@U=80@L=8000013@B=1@p=1709144512@i=U×008002140@",
    "extId": "8000013",
    "type": "ST"
}

const fetchDelay = 500

const useBahnhofSuggestions = () => {
    const [suggestions, setSuggestions] = useState([])
    const [getLastRequestTime, setLastRequestTime] = useGetState(0)

    const fetchSuggestionsWithCaching = useMemo(() => {
        return simpleCache(async (searchString) => {
            const transformedSearchString = encodeURI(searchString.replace(" ", "+"))
            return await fetchWithProxy(`https://www.bahn.de/web/api/reiseloesung/orte?suchbegriff=${transformedSearchString}&typ=ALL&limit=10`)
        })
    }, [])

    const fetchSuggestions = async (searchString) => {
        if (Date.now() - getLastRequestTime() < fetchDelay) return
        fetchSuggestionsWithCaching(searchString).then(setSuggestions)
    }

    const getSuggestions = (searchString) => {
        setLastRequestTime(Date.now())
        if (!searchString.trim()) return
        setTimeout(() => fetchSuggestions(searchString), fetchDelay)
    }

    return {
        getSuggestions,
        suggestions
    }
}

export default useBahnhofSuggestions