const proxyUrl = "http://localhost:4000/bahnProxy"

const fetchWithProxy = (url, params) => {
    const body = { url }
    if (params) {
        body["options"] = params
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    console.log("Fetch: " + proxyUrl)
    return fetch(proxyUrl, requestOptions)
        .then(response => response.json())
}

export default fetchWithProxy