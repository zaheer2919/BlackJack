
let cards = []
let sum =  0
let hasBlackJack =  false
let isAlive = false
let message = ""

let game = document.getElementById("game-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newgameel = document.getElementById("newgame-el")
let playerel = document.getElementById("player-el")

let player = {

    name: "Per",
    chips: "145"
}

playerel.textContent = player.name + ": $" + player.chips

function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){



    if (sum < 21){
        message = "Do you want to draw a new card"
    }else if(sum === 21){
        message = "You Win"
        hasBlackJack = true
    }else{
        message = "You Loose"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){

        cardsEl.textContent += cards[i] + "  "
    }


}

function newGame(){
    if (isAlive === true && hasBlackJack === false){
        
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
       
}

function getRandomCard() {


    let randomCard = Math.floor(Math.random()*13) + 1
    if ( randomCard === 1){
        return 11
    }else if (randomCard > 10 ) {
        return 10
    }else {
        return randomCard
    }

}


