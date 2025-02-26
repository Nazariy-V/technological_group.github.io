
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const menu = document.getElementById('menu');


projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const extraInfo = card.getAttribute('data-extra');
        modalBody.innerHTML = `<h2>${card.querySelector('h3').innerText}</h2>${extraInfo}`;
        modal.classList.add('active');
    });
});


modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});