const baseUrl = "http://localhost:4000"

const fetchRecons = () => {
    return fetch(baseUrl + "/loadRecons")
        .then(response => response.json())
}

export { fetchRecons } 