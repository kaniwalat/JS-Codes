const btnToast = document.getElementById("btnToast")
const divWrapper = document.getElementById("wrapper")

const messages = [
    "Merhaba Hoşgeldiniz",
    "Selam Günün nasıl geçiyor",
    "Nasılsınız Bugün",
    "Hoşgeldiniz Efendim"
]

btnToast.addEventListener('click', () => {
    generateNotification()
});

const generateNotification = () => {
    const notification = document.createElement('div')
    notification.classList.add('toast')
    
    const random = Math.floor(Math.random() * 4)
    notification.innerText = `${messages[random]}`
    divWrapper.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 3000);
}