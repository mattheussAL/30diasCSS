const card = document.querySelector('.card');

function rotateCard() {
  card.classList.toggle('rotate');
}

card.addEventListener('click', rotateCard)