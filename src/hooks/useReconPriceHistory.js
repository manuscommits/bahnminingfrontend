import { useEffect, useState } from "react"
import { fetchPriceHistory } from "../utils/backendConnection"

const useReconPriceHistory = (recon) => {
    const [reconPriceHistory, setReconPriceHistory] = useState()

    useEffect(() => {
        if (!recon) return
        fetchPriceHistory(recon).then(setReconPriceHistory).catch(() => setReconPriceHistory(null))
    }, [recon])

    return reconPriceHistory
}

export default useReconPriceHistory