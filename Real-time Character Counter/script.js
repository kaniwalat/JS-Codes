const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", () => {
    updateCounter()
});

function updateCounter() {
    let length = textareaEl.value.length
    totalCounterEl.innerText = length

    let maxLength = textareaEl.getAttribute("maxLength")
    remainingCounterEl.innerText = maxLength - length
}