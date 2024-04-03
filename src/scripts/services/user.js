import { baseUrl } from "../index.js"

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return response.json()
}

export {getUser}