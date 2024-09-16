const btnOpenModal = document.getElementById('btnOpenModal')
const bntCloseModal = document.getElementById('btnCloseModal')
const modalContainer = document.getElementById('popup-container')

btnOpenModal.addEventListener('click', () => {
    modalContainer.classList.add('active')
});

bntCloseModal.addEventListener('click', () => {
    modalContainer.classList.remove('active')
});