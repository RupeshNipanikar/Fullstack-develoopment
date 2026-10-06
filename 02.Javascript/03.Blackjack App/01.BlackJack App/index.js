let player ={
     name : "Rupesh",
    chips : 145

}
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#card-el")
let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+ player.chips

function getRandomCard(){

    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if(randomNumber === 1) {
        return 11
    }else if (randomNumber > 10 ){
        return 10
    }else{
        return randomNumber
    }
}

function startGame()
{
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard +secondCard
    isAlive =true
    renderGame()
}

function renderGame() {
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }


    
    if (sum <= 20) {
        message = "do you want to draw a new card? "
    } else if (sum === 21) {
        message = "you've got BLACKJACK! "
        hasBlackJack = true
    } else {
        message = "you are out of the game! "
        isAlive = false

    }
    messageEl.textContent = message

}


function newCard(){
    if(isAlive=== true && hasBlackJack === false){
         let card = getRandomCard()
    
    sum += card
    cards.push(card)
    console.log(cards);
    

    renderGame()

    }
    
   
}


