const light = document.getElementById('bulb')
const canvas = document.querySelector('.canvas')

light.addEventListener('click', (e) => {
    e.target.classList.toggle('bulb-on')
});

light.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
        e.target.classList.toggle('bulb-on')
    }
});
