const usernameInput = document.querySelector("#username")
const searchBtn = document.querySelector("#search-btn")
const profileContainer = document.querySelector("#profile-container")


searchBtn.addEventListener('click',()=>{
    const username = usernameInput.value.trim()
    if(!username){
        console.log("Please enter username")
    }else{
        console.log(usernameInput.value.trim());
        
    }   
})

   fetch("https://api.github.com/users/octocat")
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
    });

