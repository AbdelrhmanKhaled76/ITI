import { TOTAL_CARDS } from "../constants/main.js";
import changePercentage from "./percentage.js";
import { playSound, stopBackground } from "./audioManager.js";
function cardFlipping(cards) {
    const cardsGrid = document.querySelector(".cards-grid");
    const cardsElements = cardsGrid?.children;
    const modal = document.getElementById("gameCompleteModal");
    const restartButton = document.getElementById("restartButton");
    let firstFlippedIndex = -1;
    let lockBoard = false;
    const flipCard = (cardElement, card) => {
        cardElement.classList.add("flipped");
        card.isFlipped = true;
        playSound("flip");
    };
    const unflipCard = (cardElement, card) => {
        if (!cardElement)
            return;
        cardElement.classList.remove("flipped");
        card.isFlipped = false;
    };
    const showGameCompletePopup = () => {
        if (!modal)
            return;
        modal.classList.add("visible");
    };
    if (restartButton) {
        restartButton.addEventListener("click", () => {
            window.location.reload();
        });
    }
    if (cardsElements) {
        Array.from(cardsElements).forEach((cardElement, idx) => {
            cardElement.addEventListener("click", (e) => {
                const clickedElement = e.currentTarget;
                if (lockBoard || cards[idx].isMatched || idx === firstFlippedIndex || cards[idx].isFlipped) {
                    return;
                }
                flipCard(clickedElement, cards[idx]);
                if (firstFlippedIndex === -1) {
                    firstFlippedIndex = idx;
                    return;
                }
                const firstIndex = firstFlippedIndex;
                const secondIndex = idx;
                const firstElement = cardsElements.item(firstIndex);
                if (cards[firstIndex].source === cards[secondIndex].source) {
                    cards[firstIndex].isMatched = true;
                    cards[secondIndex].isMatched = true;
                    clickedElement.classList.add("matched");
                    firstElement?.classList.add("matched");
                    playSound("good");
                    const matchedCards = cards.filter(card => card.isMatched);
                    changePercentage((matchedCards.length / TOTAL_CARDS) * 100);
                    firstFlippedIndex = -1;
                    if (matchedCards.length === TOTAL_CARDS) {
                        stopBackground();
                        playSound("game-over");
                        showGameCompletePopup();
                    }
                }
                else {
                    playSound("fail");
                    lockBoard = true;
                    setTimeout(() => {
                        unflipCard(firstElement, cards[firstIndex]);
                        unflipCard(clickedElement, cards[secondIndex]);
                        firstFlippedIndex = -1;
                        lockBoard = false;
                    }, 1000);
                }
            });
        });
    }
}
export default cardFlipping;
