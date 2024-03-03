import { useState } from "react"
import fetchWithProxy from "../utils/bahnProxy"

const exampleSuggestion = {
    "name": "Augsburg Hbf",
    "id": "A=1@O=Augsburg Hbf@X=10885568@Y=48365444@U=80@L=8000013@B=1@p=1709144512@i=U×008002140@",
    "extId": "8000013",
    "type": "ST"
}

const fetchDelay = 500

const useBahnhofSuggestions = () => {
    const [suggestions, setSuggestions] = useState([])
    const [lastRequestTime, setLastRequestTime] = useState(0)

    const getLastRequestTime = () => {
        var time;
        setLastRequestTime((t) => { time = t; return t })
        return time
    }

    const getSuggestions = async (searchString) => {
        setLastRequestTime(Date.now())
        if (!searchString.trim()) return
        setTimeout(() => {
            fetchSuggestions(searchString)
        }, fetchDelay)
    }

    const fetchSuggestions = async (searchString) => {
        if (Date.now() - getLastRequestTime() < fetchDelay) return
        fetchWithProxy(`https://www.bahn.de/web/api/reiseloesung/orte?suchbegriff=${searchString}&typ=ALL&limit=10`)
            .then(suggestions => {
                return suggestions.map(suggestion => {
                    suggestion["title"] = suggestion["name"]
                    return suggestion
                })
            })
            .then(setSuggestions)
    }

    return {
        getSuggestions,
        suggestions
    }
}

export default useBahnhofSuggestions