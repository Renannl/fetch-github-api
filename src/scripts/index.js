import { getUser } from "../services/user.js"
import { getRepositories } from "../services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { getEvents } from "../services/events.js"

document.getElementById("btn-search").addEventListener("click", () => {
    const username = document.getElementById("input-search").value
    if(validateEmptyInput(username)) return
    getUserData(username)
})

document.getElementById("input-search").addEventListener("keyup", (enter) => {
    const username = enter.target.value
    const key = enter.which || enter.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(validateEmptyInput(username)) return
        getUserData(username)
    }
})

async function getUserData(username){

    const userResponse = await getUser(username)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(username)

    const eventsResponse = await getEvents(username)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    screen.renderUser(user)

}

function validateEmptyInput(username){
if(username.length === 0){
        alert("Put a username on the input field")
        return true
    }
}

async function logRepositories() {
    const repos = await getRepositories("renannl");
    console.log(repos);
}

logRepositories();
