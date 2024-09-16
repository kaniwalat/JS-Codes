let sendButton = document.getElementById('send')
let resetButton = document.getElementById('reset')
let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
});

sendButton.addEventListener('click', (e) => {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')

    name = name.value
    localStorage.setItem('name', name)

    email = email.value
    localStorage.setItem('email', email)

    message = message.value
    localStorage.setItem('message', message)
});

resetButton.addEventListener('click', (e) => {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')

    name.value = ''
    email.value = ''
    message.value = ''
});