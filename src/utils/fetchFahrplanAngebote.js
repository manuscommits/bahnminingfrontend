import fetchWithProxy from "./bahnProxy"

const url = "https://www.bahn.de/web/api/angebote/fahrplan"

const fetchFahrplanAngebote = (abfahrtsHalt, ankunftsHalt, anfrageZeitpunkt, nurDirektverbindungen, pagingReference) => {
    const body = {
        "abfahrtsHalt": abfahrtsHalt,
        "anfrageZeitpunkt": anfrageZeitpunkt,
        "ankunftsHalt": ankunftsHalt,
        "ankunftSuche": "ABFAHRT",
        "klasse": "KLASSE_2",
        "pagingReference": pagingReference ? pagingReference : undefined,
        "maxUmstiege": nurDirektverbindungen ? 0 : undefined,
        "produktgattungen": [
            "ICE",
            "EC_IC",
            "IR",
            "REGIONAL",
            "SBAHN",
            "BUS",
            "SCHIFF",
            "UBAHN",
            "TRAM",
            "ANRUFPFLICHTIG"
        ],
        "reisende": [
            {
                "typ": "ERWACHSENER",
                "ermaessigungen": [
                    {
                        "art": "KEINE_ERMAESSIGUNG",
                        "klasse": "KLASSENLOS"
                    }
                ],
                "alter": [],
                "anzahl": 1
            }
        ],
        "rueckfahrtAnfrageFolgt": false,
        "schnelleVerbindungen": true,
        "sitzplatzOnly": false,
        "bikeCarriage": false,
        "reservierungsKontingenteVorhanden": false
    }
    const options = {
        "method": "POST",
        "body": JSON.stringify(body),
        "headers": { 'Content-Type': 'application/json' }
    }

    return fetchWithProxy(url, options)
}

export default fetchFahrplanAngebote