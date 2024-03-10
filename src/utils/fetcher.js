const baseUrl = "http://localhost:4000"

const getFetch = async (path) => {
    console.log("GET " + path)
    return await fetch(baseUrl + "/" + path)
        .then(response => response.json())
}

const postFetch = async (path, body) => {
    console.log("POST " + path)
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return await fetch(baseUrl + "/" + path, requestOptions)
        .then(response => response.json())
}

export { getFetch, postFetch }