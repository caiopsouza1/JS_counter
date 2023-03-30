let count = 0
const decrease = document.getElementById('btnDecrease')
const increment = document.getElementById('btnIncrease')
const reset = document.getElementById('btnReset')
const counter = document.getElementById('value')

decrease.onclick = function() {
    count -= 1
    counter.innerHTML = count
    if (count <= 0) {
        counter.style.color = "crimson"
    } else if (counter === 0) {
        counter.style.color = "black"
    }
}

reset.onclick = function() {
    count = 0
    counter.innerHTML = count
    counter.style.color = "black"
}

increment.onclick = function() {
    count += 1
    counter.innerHTML = count
    if (count > 0) {
        counter.style.color = "green"
    } else if (count === 0) {
        counter.style.color = "black"
    }
}