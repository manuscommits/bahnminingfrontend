import { postFetch } from "./fetcher"

const fetchWithProxy = async (url, params) => {
    const body = { url }
    if (params) {
        body["options"] = params
    }
    return await postFetch("/bahnProxy", body)
}

export default fetchWithProxy