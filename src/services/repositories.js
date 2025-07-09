import { baseUrl, repositoriesQuantity } from "../scripts/variables.js"

async function getRepositories(username){
    const response = await fetch(`${baseUrl}/${username}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export{ getRepositories}