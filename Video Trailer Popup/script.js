const btnEl = document.querySelector(".btn")
const closeIconEl = document.querySelector(".close-icon")
const trailerContainerEl = document.querySelector(".trailer-container")
const videoEl = document.querySelector("video")

function startVideo() {
    trailerContainerEl.classList.remove("active")
}

function closeVideo() {
    trailerContainerEl.classList.add("active")
    videoEl.pause()
    videoEl.currentTime = 0
}


btnEl.addEventListener("click", startVideo)
closeIconEl.addEventListener("click", closeVideo)