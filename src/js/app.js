let burger = document.querySelector('#burger');
let openBtn = document.querySelector('#open-btn');
let body = document.querySelector('body');
let link = document.querySelector('.burger__link');

openBtn.addEventListener('click', () => {
  burger.classList.toggle('active');
});



const loginModal = document.getElementById('modal-login')
const registrationModal = document.getElementById('modal-registration')
const modalBtn = document.getElementById('modalBtn')
const modalBtn2 = document.getElementById('modalBtn2')
const modalBtn3 = document.getElementById('modalBtn3')
const modalGoToLoginBtn = document.getElementById('modal-goToLoginBtn')
const modalGoToRegistrationBtn = document.getElementById('modal-goToRegistrationBtn')
const closeBtns = document.getElementsByClassName('modal-header-close-btn')
const tegbody = document.querySelector('body')

modalBtn.addEventListener('click', () => {
  addClass(loginModal)
  body.style.overflow = 'hidden'
})
modalBtn2.addEventListener('click', () => {
  addClass(loginModal)
  body.style.overflow = 'hidden'
})
modalBtn3.addEventListener('click', () => {
  addClass(loginModal)
  body.style.overflow = 'hidden'
})


document.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    removeClass(loginModal)
    body.style.overflow = 'auto'
  }
  if (e.target === registrationModal) {
    removeClass(registrationModal)
    body.style.overflow = 'auto'
  }
})

modalGoToLoginBtn.addEventListener('click', () => {
  removeClass(registrationModal)
  addClass(loginModal)
})

modalGoToRegistrationBtn.addEventListener('click', () => {
  removeClass(loginModal)
  addClass(registrationModal)
})

function addClass(selector) {
  selector.classList.add('active')
}

function removeClass(selector) {
  selector.classList.remove('active')
}
