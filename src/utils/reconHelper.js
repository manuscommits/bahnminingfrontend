import dayjs from "dayjs"

const extractVerbindungsabschnitteRecon = (rawRecon) => {
    const splitter = /(\$\$[0-9]+\$\$\$\$\$\$)/g
    if (rawRecon.endsWith("$$$$$$")) {
        return rawRecon
    }
    const verbindungsabschnitte = rawRecon.split(splitter).slice(0, -1)
    const joinedVerbindungsabschnitte = verbindungsabschnitte.join("")
    if (!joinedVerbindungsabschnitte.endsWith("$$$$$$")) {
        console.log("Recon: " + rawRecon + "  is not parseable")
    }
    return joinedVerbindungsabschnitte
}

const compactFormatToDate = (compactDate) => {
    const year = compactDate.slice(0, 4)
    const month = compactDate.slice(4, 6)
    const day = compactDate.slice(6, 8)
    const hour = compactDate.slice(8, 10)
    const minute = compactDate.slice(10, 12)
    return dayjs(`${year}-${month}-${day}T${hour}:${minute}`)
}

const parseRecon = (rawRecon) => {
    const recon = extractVerbindungsabschnitteRecon(rawRecon)
    try {
        const verbindungsabschnitte = recon
            .split(/\$\$[0-9]+\$+\$/)
            .filter((x) => x)
            .map((abschnitt) => {
                const dataList = abschnitt.split('@')
                const abfahrtsHalt = dataList[1].slice(2)
                const ankunftsHalt = dataList[5].slice(2)
                const timesAndTrain = dataList[8].split('$').filter((x) => x)
                const abfahrtsZeit = compactFormatToDate(timesAndTrain[0])
                const ankunftsZeit = compactFormatToDate(timesAndTrain[1])
                const zug = timesAndTrain[2] ? timesAndTrain[2].replace(/\s+/g, ' ') : null
                return { abfahrtsHalt, ankunftsHalt, abfahrtsZeit, ankunftsZeit, zug }
            })
        return verbindungsabschnitte
    } catch (err) {
        console.log("Error while parsing recon: " + recon + ". Error message " + err)
    }
}

export { extractVerbindungsabschnitteRecon, parseRecon }