$(document).ready(function () {
	$('.carusel__caruselka').slick({
		arrows: false
	});
    const swiper = new Swiper('.carusel__caruselka', {
        autoplay: {
          delay: 11000,
        },
       });
});


let burger = document.querySelector('#burger');
let closeBtn = document.querySelector('#close-btn');
let openBtn = document.querySelector('#open-btn');
let body = document.querySelector('body');
let carusel = document.querySelector('#carusel');
let link = document.querySelector('.burger__link');
let photo = document.querySelector('#photo');

openBtn.addEventListener('click', () => {
	burger.classList.add('active');
	body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
	burger.classList.remove('active');
	body.style.overflow = 'auto';
})

photo.addEventListener('click', () => {
	body.style.overflow = 'auto';
	burger.classList.remove('active');
})


const loginModal = document.getElementById('modal-login')
const registrationModal = document.getElementById('modal-registration')
const modalBtn = document.getElementById('modalBtn')
const modalGoToLoginBtn = document.getElementById('modal-goToLoginBtn')
const modalGoToRegistrationBtn = document.getElementById('modal-goToRegistrationBtn')
const closeBtns = document.getElementsByClassName('modal-header-close-btn')

modalBtn.addEventListener('click', () => {
  addClass(loginModal)
})

for (const btn of closeBtns) {
  btn.addEventListener('click', () => {
    removeClass(loginModal)
    removeClass(registrationModal)
  })
}

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
