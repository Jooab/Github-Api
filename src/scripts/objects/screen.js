const screen = {
   userProfile: document.querySelector('.profile-data'),
   renderUser(user) {
      this.userProfile.innerHTML =

                                          `<div class="info">
                                             <img src='${user.avatarUrl}' alt='Foto do Perfil do Usuário'/>
                                             <div class="data">
                                             <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                                             <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                                             <p>👨‍👨‍👧  Seguidores: ${user.followers}</p>
                                             <p>👥  Seguindo: ${user.following}</p>
                                             </div>
                                             </div>`

      let repositoriesItens = ""
      user.repositories.forEach(function (repo) {

         if (repo.language !== null) { repositoriesItens += 
                                             `<li>
                                             <a href="${repo.html_url}" target="_blank">${repo.name}
                                             <div class="repository-info">
                                             <div class="info">🍴  ${repo.forks}</div>
                                             <div class="info">⭐  ${repo.stargazers_count}</div>
                                             <div class="info">👀  ${repo.watchers}</div>
                                             <div class="info">👨‍💻  ${repo.language}</div>
                                             </div>
                                             </a>
                                             </li>`

         } else if (repo.language === null){ repositoriesItens += 
                                             `<li>
                                             <a href="${repo.html_url}" target="_blank">${repo.name}
                                             <div class="repository-info">
                                             <div class="info">🍴  ${repo.forks}</div>
                                             <div class="info">⭐  ${repo.stargazers_count}</div>
                                             <div class="info">👀  ${repo.watchers}</div>
                                             <div class="info">👨‍💻  Sem linguagem</div>
                                             </div>
                                              </a>
                                       
                                             </li>` }


      })

      if (user.repositories.length > 0) {
         this.userProfile.innerHTML += 
                                             `<div class="repositories section">
                                             <h2>Repositórios</h2>
                                             <ul>${repositoriesItens}</ul>
                                             </div>`
      }

      let eventsItens = ""
      user.events.forEach(function (event) {

         if (event.type === "CreateEvent") { eventsItens += 
          `<li><span>${event.repo.name}</span> - Sem mensagem de Commit</li>`
         }

         else if (event.payload.commits.length > 0 && event.type === "PushEvent") { eventsItens += 
         `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`
         }
      })

      if (user.events.length > 0) {
         this.userProfile.innerHTML += 
                                             `<div class="events section">
                                             <h2>Eventos</h2>
                                             <ul>${eventsItens}</ul>
                                             </div>`
      }
   },

   renderNotFound() {
      this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
   }
}

export { screen }