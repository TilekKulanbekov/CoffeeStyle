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