const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="profile-picture" />
                                        <div class="data">
                                            <h1>${user.name ?? "Does not have a registered name"}</h1>
                                            <p>${user.bio ?? "Does not have a registered bio"}</p>
                                        </div>
                                    </div>`
        
        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += ` <li><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositories</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>User not found.</h3>"
    }
}

export { screen }