import { getRepositories } from "./services/repositories.js"
import { getUser } from "./services/user.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', ()=>{
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e)=>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPress = key === 13

    if(isEnterKeyPress){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})



async function getUserData(userName){
    
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    
    user.setInfo(userResponse)
    
    user.setRepositories(repositoriesResponse)
    
    screen.renderUser(user)
}

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com um nome de usuário do Github')
        return true
    }
}

const baseUrl = 'https://api.github.com/users'
const repositoriesQuantity = 10

export { baseUrl, repositoriesQuantity}



