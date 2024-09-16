let navWrapper = document.querySelector('.nav-wrapper'),
navToggler =  document.querySelector('.nav-toogler')

navToggler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active')
})