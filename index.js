let homeCount = 0
let guestCount = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function homeOne() {
    homeCount = homeCount + 1
    homeScore.textContent = homeCount
}

function homeTwo() {
    homeCount = homeCount + 2
    homeScore.textContent = homeCount
}

function homeThree() {
    homeCount = homeCount + 3
    homeScore.textContent = homeCount
}

function guestOne() {
    guestCount = guestCount + 1
    guestScore.textContent = guestCount
}

function guestTwo() {
    guestCount = guestCount + 2
    guestScore.textContent = guestCount
}

function guestThree() {
    guestCount = guestCount + 3
    guestScore.textContent = guestCount
}