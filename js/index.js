const $btn = document.querySelector('.btn');

const $popup = document.querySelector('.popup');

const $overlay = document.querySelector('.overlay');

$btn.addEventListener('click', (e) => {
    $popup.classList.add('active');
    $overlay.classList.add('visible');
});

$overlay.addEventListener('click', (e) => {
    $popup.classList.remove('active');
    $overlay.classList.remove('visible');
});