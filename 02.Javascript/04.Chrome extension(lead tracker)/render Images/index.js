
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages(){
    let imgDom = ""
    for(let i = 0;i < imgs.length;i++){
        imgDom += `<img alt="employee of the company ${i+1}" class="team-img" src="${imgs[i]}">`
    }

    container.innerHTML = imgDom
}

renderImages()
