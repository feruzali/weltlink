let openMenuBtn = document.getElementById('open-menu'),
    closeMenuBtn = document.getElementById('close-menu'),
    menu = document.querySelector('.header-menu');

openMenuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
});
closeMenuBtn.addEventListener('click', () => {
    menu.style.display = '';
});