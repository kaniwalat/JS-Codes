// Create an array of Image Sources
let images = [
    'image1.png', 'image2.png', 'image3.png', 'image4.png'
]

let i = 0

// Add initial image to canvas
let canvas = document.getElementById('canvas')
canvas.style.background = `url(./images/${images[0]})`

// Add Event Listeners to arrows
let arrows = document.querySelectorAll('.arrow')

arrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        if (e.target.id === "left") {
            i--;
            if (i < 0) {
                i = images.length - 1
            }
            showImage()

        } else if (e.target.id === "right") {
            i++;
            if (i >= images.length) {
                i = 0
            }
            showImage()
        }

        function showImage() {
            canvas.style.background = `url(./images/${images[i]})`
        }
    });
});