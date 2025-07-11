const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.username = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
            .filter(repo =>
                (repo.forks) ||
                (repo.stargazers_count) ||
                (repo.watchers) ||
                (repo.language)
            )
    },
    setEvents(events) {
        this.events = events
            .filter(event =>
                (event.type === "PushEvent") ||
                (event.type === "CreateEvent") 
            )
            .flatMap(event => {
                if (event.type === "PushEvent" && event.payload?.commits?.length) {
                    return event.payload.commits.map(commit => ({
                        repo: event.repo.name,
                        message: commit.message
                    }))
                } else {
                    return [{
                        repo: event.repo.name,
                        message: "No commit message"
                    }]
                }
            })
    }
}



export{ user }