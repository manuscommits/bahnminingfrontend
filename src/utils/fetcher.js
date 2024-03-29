const baseUrl = "https://weevil-optimum-eagerly.ngrok-free.app"

const getFetch = async (path) => {
    return await fetch(baseUrl + path)
        .then(response => response.json())
}

const postFetch = async (path, body) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return await fetch(baseUrl + path, requestOptions)
        .then(response => response.json())
}

export { getFetch, postFetch }