let count = 0
let countEl = document.getElementById('count-el')
let total = document.getElementById('total-el')
const totalDef = "Total passengers: "

function increment() {
    count+= 1
    countEl.textContent = count
}

function save() {
    if (countEl.textContent > 0) {
    total.textContent +=  count + " - "
    countEl.textContent = 0
    count = 0
}
}

function reset() {
    
    count = 0
    countEl.textContent = 0
    total.textContent = totalDef
}