const btnBGChanger = document.getElementById('btn')

function randomBG() {
    let random = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
    return random
}

function backgroundChange() {
    document.body.style.background = randomBG()
}

btnBGChanger.addEventListener('click', backgroundChange)