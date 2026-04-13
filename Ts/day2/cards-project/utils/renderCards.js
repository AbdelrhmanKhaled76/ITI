import { BACK_IMAGE } from "../constants/main.js";
function renderCards(cards) {
    const cardsGrid = document.querySelector('.cards-grid');
    if (!cardsGrid) {
        console.error("Cards grid element not found!");
        return;
    }
    cardsGrid.innerHTML = '';
    cards.forEach((_, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.setAttribute('data-index', index.toString());
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        const cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front';
        cardFront.style.backgroundImage = `url('${BACK_IMAGE}')`;
        const cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back';
        cardBack.style.backgroundImage = `url('${cards[index].source}')`;
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);
        cardsGrid.appendChild(cardElement);
    });
    console.log("Cards rendered successfully!");
}
export default renderCards;
