let openMenuBtn = document.getElementById('open-menu'),
    closeMenuBtn = document.getElementById('close-menu'),
    menu = document.querySelector('.header-menu');

openMenuBtn.addEventListener('click', () => {
	event.preventDefault();
	gsap.to('#header-menu', {duration: 1, y: 0});
	document.body.style.overflow = 'hidden';
});
closeMenuBtn.addEventListener('click', () => {
	gsap.to('#header-menu', {duration: 1, y: '-100%'});
	document.body.style.overflow = '';
});

// Brief
let openBriefBtn = document.getElementById('open-brief'),
closeBriefBtn = document.querySelector('#brief .menu__close');

openBriefBtn.addEventListener('click', openBrief);
closeBriefBtn.addEventListener('click', () => {
	gsap.to('#brief', {duration: 1, y: '-100%'});
	document.body.style.overflow = '';
});
function openBrief() {	
	event.preventDefault();
	gsap.to('#brief', {duration: 1, y: 0});
	document.body.style.overflow = 'hidden';
}

// Contacts
let openContactsBtn = document.getElementById('open-contacts'),
	openContactsBtn_xs = document.getElementById('open-contacts_xs'),
	closeContactsBtn = document.querySelector('#contacts .menu__close'),
	windowWidth = window.innerWidth;

openContactsBtn.addEventListener('click', () => {	
	event.preventDefault();
	gsap.to('#contacts', {duration: 1, y: 0});
	document.body.style.overflow = 'hidden';
});
openContactsBtn_xs.addEventListener('click', () => {
	event.preventDefault();
	gsap.to('#contacts', {duration: 1, x: 0});
	document.body.style.overflow = 'hidden';
});

closeContactsBtn.addEventListener('click', () => {
	if(windowWidth >= 992) {
		gsap.to('#contacts', {duration: 1, y: '-100%'});
	} else {
		gsap.to('#contacts', {duration: 1, x: '-100%'});
	}
	document.body.style.overflow = '';
});



// Projects Slider
$(document).ready(function(){
	$('.projects-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		waitForAnimate: false
	});
});

// Map 
function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8,
		mapId: '2667e61fd48304dc'
	});
  }