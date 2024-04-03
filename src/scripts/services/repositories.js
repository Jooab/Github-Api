import { baseUrl, repositoriesQuantity } from "../index.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return response.json()
}

export {getRepositories}