const usernameInput = document.querySelector("#username")
const searchBtn = document.querySelector("#search-btn")
const profileContainer = document.querySelector("#profile-container")


searchBtn.addEventListener('click',()=>{
    const username = usernameInput.value.trim()
    if(!username){
        profileContainer.innerHTML = "<p>Please enter username</p>"
        return
    }else{  
        getUser(username)
    }
})

   async function getUser(username) {
    try {
        searchBtn.innerHTML="searching"
        profileContainer.innerHTML="<p>Searching...</p>"
        searchBtn.disabled = true
        const response = await fetch( `https://api.github.com/users/${username}`)
                    
    if(!response.ok){
        throw new Error("user not found");
        
    }
        const data = await response.json();
        profileContainer.innerHTML=
        `<img src="${data.avatar_url}" alt="GitHub Profile Picture" width="120" height="120">
        <h2>${data.login}</h2>
        <p>Name: ${data.name || "Name not available"}</p>
        <p>Followers:${data.followers}</p>
        <p>Public Repositories: ${data.public_repos}</p>
`
    } catch (error) {
        profileContainer.innerHTML = `<p>${error.message}</p>`;
    }finally{
        searchBtn.innerHTML="search"

        searchBtn.disabled = false
    }
   }

