let burger = document.querySelector('#burger');
let openBtn = document.querySelector('#open-btn');
let body = document.querySelector('body');
let link = document.querySelector('.burger__link');

openBtn.addEventListener('click', () => {
	burger.classList.toggle('active');
	body.style.overflow = 'hidden';
});



const loginModal = document.getElementById('modal-login')
const registrationModal = document.getElementById('modal-registration')
const modalBtn = document.getElementById('modalBtn')
const modalBtn2 = document.getElementById('modalBtn2')
const modalGoToLoginBtn = document.getElementById('modal-goToLoginBtn')
const modalGoToRegistrationBtn = document.getElementById('modal-goToRegistrationBtn')
const closeBtns = document.getElementsByClassName('modal-header-close-btn')

modalBtn.addEventListener('click', () => {
  addClass(loginModal)
})
modalBtn2.addEventListener('click', () => {
  addClass(loginModal)
})


document.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    removeClass(loginModal)
  }
  if (e.target === registrationModal) {
    removeClass(registrationModal)
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
