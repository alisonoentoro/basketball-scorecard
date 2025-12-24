let count = 0
let countEl = document.getElementById("count-points-home") 
function point1() {
    count = count + 1
    countEl.innerText = count
}

function point1Home() {
    count = count + 1
    countEl.innerText = count
}

function point2Home() {
    count = count + 2
    countEl.innerText = count
}

function point3Home() {
    count = count + 3
    countEl.innerText = count
}

let countGuest = 0
let countElGuest = document.getElementById("count-points-guest") 
function point1Guest() {
    countGuest = countGuest + 1
    countElGuest.innerText = countGuest
}

function point2Guest() {
    countGuest = countGuest + 2
    countElGuest.innerText = countGuest
}

function point3Guest() {
    countGuest = countGuest + 3
    countElGuest.innerText = countGuest
}
