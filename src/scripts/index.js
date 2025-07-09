import { getUser } from "/src/services/user.js"
import { getRepositories } from "/src/services/repositories.js"
import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"

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

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}

function validateEmptyInput(username){
if(username.length === 0){
        alert("Put a username on the input field")
        return true
    }
}