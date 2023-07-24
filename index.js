let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let home = 0
let guest = 0

// Scoreboard Update Functions

function updateHome() {

    scoreHome.textContent = home
    
}

function updateGuest() {

    scoreGuest.textContent = guest

}

function clearScores() {

    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    home = 0
    guest = 0

}

// Home Button Functions

function homePlusOne() {

    home += 1
    updateHome()

}

function homePlusTwo() {

    home += 2
    updateHome()

}

function homePlusThree() {

    home += 3
    updateHome()

}

// Guest Button Functions

function guestPlusOne() {

    guest += 1
    updateGuest()

}

function guestPlusTwo() {

    guest += 2
    updateGuest()

}

function guestPlusThree() {

    guest += 3
    updateGuest()

}

