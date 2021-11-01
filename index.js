// document.getElementById("count-el").innerText = 5;
// let firstBatch = 5
// let secondBatch = 7


// let count = firstBatch + secondBatch

// console.log(count)

// let count = 5

// count = count + 1

// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints= bonusPoints+50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log (bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// BUTTON ACTION//


// initialize count as 0
// listen for clicks in the increment button
// increment the count variable when button is clicked (log it out)
// change count-el in HTML to reflect the new count


let countEl = document.getElementById("count-el") // Pass in argument
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment (){
    count += 1
    countEl.innerText= count

    console.log (count)
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr



    console.log("count")
} 
