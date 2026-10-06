let scoreboardHomeEl = document.getElementById('scoreboardHome-el')
let scoreboardGuestEl = document.getElementById('scoreboardGuest-el')
let newGameEl = document.getElementById('newGame')
let score = 0
function HomePlus1(){
    score += 1
 scoreboardHomeEl.textContent = score

}

function HomePlus2(){
   score += 2
 scoreboardHomeEl.textContent = score

}

function HomePlus3(){
    score += 3
 scoreboardHomeEl.textContent = score
}

function GuestPlus1(){
    score += 1
 scoreboardGuestEl.textContent = score

}

function GuestPlus2(){
   score += 2
 scoreboardGuestEl.textContent = score

}

function GuestPlus3(){
    score += 3
 scoreboardGuestEl.textContent = score
}

function reset(){
    score = 0
    scoreboardGuestEl.textContent = score
    scoreboardHomeEl.textContent = score
}