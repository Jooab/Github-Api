const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    repositories : [],
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
    },

    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}