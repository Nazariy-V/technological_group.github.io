
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const menu = document.getElementById('menu');


projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const extraInfo = card.getAttribute('data-extra') || '';
        const title = card.querySelector('h3') ? card.querySelector('h3').innerText : 'No Title';
        const projectImage = card.querySelector('img');

        const imageHTML = projectImage ? `<img src="${projectImage.src}" alt="Project Image" >` : '';

        modalBody.innerHTML = `<h2>${title}</h2>${imageHTML}<p>${extraInfo}</p>`;
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