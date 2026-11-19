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
       profileContainer.innerHTML = `
    <div class="profile-card">

        <img
            class="avatar"
            src="${data.avatar_url}"
            alt="GitHub profile picture"
        >

        <h2>${data.login}</h2>

        <p class="name">
            ${data.name || "Just another GitHub developer"}
        </p>

        <div class="stats">

            <div class="stat">
                <h3>${data.followers}</h3>
                <p>Followers</p>
            </div>

            <div class="stat">
                <h3>${data.public_repos}</h3>
                <p>Repositories</p>
            </div>

        </div>

    </div>
`;
    } catch (error) {
        profileContainer.innerHTML = `<p>${error.message}</p>`;
    }finally{
        searchBtn.innerHTML="search"

        searchBtn.disabled = false
    }
   }

