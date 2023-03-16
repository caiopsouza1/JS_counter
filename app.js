const value = document.getElementById("value")
const increaseBtn = document.getElementById("btn-increase")
const decreaseBtn = document.getElementById("btn-decrease")

let count = 0
value.innerHTML = count

function increaseBtn () {
count++;
value.innerHTML = count
}

