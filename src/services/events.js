import { baseUrlEvents } from "../scripts/variables.js"
import { eventsPerPage } from "../scripts/variables.js"

async function getEvents(username) {
    const response = await fetch(`${baseUrlEvents}${username}${eventsPerPage}`)
    return await response.json()
}

export { getEvents }