const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")

const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

let score = JSON.parse(localStorage.getItem("score"))

if(!score) {
    score = 0
}

scoreEl.innerText = `score: ${score}`
questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2

function submitNums() {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        let interval = setInterval(() => {
            scoreEl.innerText = `Correct answer!`
        }, 1000);
        clearInterval(interval)
        score--
        updateLocalStorage()
    } else {
        scoreEl.innerText = `Wrong answer!`
        setTimeout(() => {
            score--
        }, 1000);
        updateLocalStorage()
    }
}

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}

formEl.addEventListener("submit",submitNums)
