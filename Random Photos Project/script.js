const imageContainerEl = document.querySelector(".image-container")

const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", () => {
    imageNum = 10
    addNewImages()
});

function addNewImages() {
    for(let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img")
        const randomImg = Math.floor(Math.random() * 2000)
        newImgEl.src = `https://picsum.photos/300?random=${randomImg}`
        
        imageContainerEl.appendChild(newImgEl)
    }
}