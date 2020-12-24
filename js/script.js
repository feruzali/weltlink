let openMenuBtn = document.getElementById('open-menu'),
    closeMenuBtn = document.getElementById('close-menu'),
	menu = document.querySelector('.header-menu'),
	main = document.getElementById('main');

openMenuBtn.addEventListener('click', () => {
	event.preventDefault();
	gsap.to('#header-menu', {duration: 1, y: 0});
	main.style.overflow = 'hidden';
});
closeMenuBtn.addEventListener('click', () => {
	gsap.to('#header-menu', {duration: 1, y: '-100%'});
	main.style.overflow = '';
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

// function initMap() {
// // Styles a map in night mode.
// const map = new google.maps.Map(document.getElementById("map"), {
// 	center: { lat: 40.674, lng: -73.945 },
// 	zoom: 12,
// 	styles: [
// 	{
// 		"elementType": "geometry",
// 		"stylers": [
// 		{
// 			"color": "#212121"
// 		}
// 		]
// 	},
// 	{
// 		"elementType": "labels.icon",
// 		"stylers": [
// 		{
// 			"visibility": "off"
// 		}
// 		]
// 	},
// 	{
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#757575"
// 		}
// 		]
// 	},
// 	{
// 		"elementType": "labels.text.stroke",
// 		"stylers": [
// 		{
// 			"color": "#212121"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "administrative",
// 		"elementType": "geometry",
// 		"stylers": [
// 		{
// 			"color": "#757575"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "administrative.country",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#9e9e9e"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "administrative.land_parcel",
// 		"stylers": [
// 		{
// 			"visibility": "off"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "administrative.locality",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#bdbdbd"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "poi",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#757575"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "poi.park",
// 		"elementType": "geometry",
// 		"stylers": [
// 		{
// 			"color": "#181818"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "poi.park",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#616161"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "poi.park",
// 		"elementType": "labels.text.stroke",
// 		"stylers": [
// 		{
// 			"color": "#1b1b1b"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "road",
// 		"elementType": "geometry.fill",
// 		"stylers": [
// 		{
// 			"color": "#2c2c2c"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "road",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#8a8a8a"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "road.arterial",
// 		"elementType": "geometry",
// 		"stylers": [
// 		{
// 			"color": "#373737"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "road.highway",
// 		"elementType": "geometry",
// 		"stylers": [
// 		{
// 			"color": "#3c3c3c"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "road.highway.controlled_access",
// 		"elementType": "geometry",
// 		"stylers": [
// 		{
// 			"color": "#4e4e4e"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "road.local",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#616161"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "transit",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#757575"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "water",
// 		"elementType": "geometry",
// 		"stylers": [
// 		{
// 			"color": "#000000"
// 		}
// 		]
// 	},
// 	{
// 		"featureType": "water",
// 		"elementType": "labels.text.fill",
// 		"stylers": [
// 		{
// 			"color": "#3d3d3d"
// 		}
// 		]
// 	}
// 	],
// });
// }