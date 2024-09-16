const imgs = document.getElementById("imgs")
const img = document.querySelector("#imgs img")

let idx = 0

setInterval(() => {
    idx++;
    if(idx > img.length - 1) {
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}, 2000);