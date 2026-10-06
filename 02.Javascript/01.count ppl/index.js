let saveEl = document.getElementById("save-el")
let countEl =  document.getElementById("count-el")
// console.log(countEl);


let count = 0

function increment(){    
    console.log("clicked")

    count += 1 
    countEl.textContent = count
    // console.log(count)
    

}

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    
    countEl.textContent = 0  
    count = 0
}







