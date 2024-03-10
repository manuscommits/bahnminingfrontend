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
    return dayjs(compactDate)
}

const parseRecon = (rawRecon) => {
    const recon = extractVerbindungsabschnitteRecon(rawRecon)
    try {
        const verbindungsabschnitte = recon
            .split(/\$+\$[0-9]+\$+\$/)
            .filter(x => x)
            .map((abschnitt) => {
                const dataList = abschnitt.split('@')
                const halte = dataList.filter(item => item.startsWith("O="))
                const abfahrtsHalt = halte[0].slice(2)
                const ankunftsHalt = halte[1].slice(2)
                const timesAndTrain = dataList[dataList.length - 1].split('$').filter((x) => x)
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