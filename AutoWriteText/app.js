const myText = `Hello There! I am a React/React Native Engineer`
const divWrapper = document.getElementById('wrapper')

let index = 0

setInterval(() => {
    divWrapper.innerText = myText.slice(0, index)
    index++
    
    if (index > myText.length) {
        index = 0
    }
}, 200)