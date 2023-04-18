
const $btn = document.querySelector('.btn');

const $popup = document.querySelector('.popup');

const $overlay = document.querySelector('.overlay');

$btn.addEventListener('click', function(event) {
    $popup.classList.add('active')
    $overlay.classList.add('visible')
  });

  document.addEventListener('click', function(event) {
    if (!$popup.contains(event.target)) {
        $popup.classList.remove('active')
        $overlay.classList.remove('visible')
    }
  })