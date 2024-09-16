// Select 7 colors
let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow']

// change the background of canvas when button is clicked
let button = document.getElementById('btn')
// grab the canvas
let canvas = document.getElementById('canvas')

button.addEventListener('click', () => {
    // select a random number between 0-6
    let index = parseInt((Math.random()*colors.length)+1)
    
    canvas.style.background = `${colors[index]}`
});

setInterval(() => {
    let index = parseInt((Math.random()*colors.length)+1)
    
    canvas.style.background = `${colors[index]}`
}, 2000);