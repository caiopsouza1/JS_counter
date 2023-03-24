let count = 0

document.getElementById("btnDecrease").onclick = function() {
    count -= 1
    document.getElementById("value").innerHTML = count
    console.log(count)
}

document.getElementById("btnReset").onclick = function() {
    count = 0
    document.getElementById("value").innerHTML = count
    console.log(count)
}

document.getElementById("btnIncrease").onclick = function() {
    count += 1
    document.getElementById("value").innerHTML = count
    console.log(count)
}