import { getFetch, postFetch } from "./fetcher"

const fetchRecons = async () => {
    return await getFetch("/loadRecons")
}

const fetchPriceHistory = async (recon) => {
    const body = { recon }
    return await postFetch("/priceHistory", body)
}

export { fetchRecons, fetchPriceHistory } 