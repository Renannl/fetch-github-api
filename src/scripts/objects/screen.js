const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="profile-picture" />
                                        <div class="data">
                                            <h1>${user.name ?? "Does not have a registered name"}</h1>
                                            <p>${user.bio ?? "Does not have a registered bio"}</p><br>
                                            <p>👤 Followers: ${user.followers} 👥 Following: ${user.following}</p>
                                        </div>
                                    </div>`
        
        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += ` <li><a target="_blank" href="${repo.html_url}">${repo.name}</a> <br>📳${repo.forks} ⭐${repo.stargazers_count} 👀${repo.watchers} 👨‍💻${repo.language} </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositories</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ""
        user.events.forEach(event => {
            eventsItens += `<li>${event.repo} - ${event.message}</li>`
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>Recent commits</h2>
                    <ul>${eventsItens}</ul>
                </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>User not found.</h3>"
    }
}

export { screen }