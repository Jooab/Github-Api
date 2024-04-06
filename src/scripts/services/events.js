import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getEvents(username) {
    const response = await fetch(`${baseUrl}/${username}/events?per_page=${repositoriesQuantity}`)
    return response.json()
}

export { getEvents }
