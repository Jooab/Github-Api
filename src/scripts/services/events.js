import { baseUrl, eventsQuantity } from "../variables.js"

async function getEvents(username) {
    const response = await fetch(`${baseUrl}/${username}/events`)
    const events = await response.json()
    return events.filter(event => event.type ==='CreateEvent' || event.type ==='PushEvent').slice(0, eventsQuantity)
}

export { getEvents }
