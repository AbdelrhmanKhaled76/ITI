import Card from "../classes/Card.js";
import { BACK_IMAGE, TOTAL_CARDS } from "../constants/main.js";
import changePercentage from "./percentage.js";
import { playSound, stopBackground } from "./audioManager.js";

function cardFlipping(cards : Card[]) : void {
    const cardsGrid = document.querySelector<HTMLDivElement>(".cards-grid");
    const cardsElements = cardsGrid?.children;
    const modal = document.getElementById("gameCompleteModal") as HTMLDivElement | null;
    const restartButton = document.getElementById("restartButton") as HTMLButtonElement | null;
    let firstFlippedIndex = -1;
    let lockBoard = false;

    const flipCard = (cardElement: HTMLElement, card: Card) => {
        cardElement.classList.add("flipped");
        card.isFlipped = true;
        playSound("flip");
    };

    const unflipCard = (cardElement: HTMLElement | null, card: Card) => {
        if (!cardElement) return;
        cardElement.classList.remove("flipped");
        card.isFlipped = false;
    };

    const showGameCompletePopup = () => {
        if (!modal) return;
        modal.classList.add("visible");
    };

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            window.location.reload();
        });
    }

    if (cardsElements) {
        Array.from(cardsElements).forEach((cardElement, idx : number) => {
            cardElement.addEventListener("click", (e) => {
                const clickedElement = e.currentTarget as HTMLElement;

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
                const firstElement = cardsElements.item(firstIndex) as HTMLElement | null;

                if (cards[firstIndex].source === cards[secondIndex].source) {
                    cards[firstIndex].isMatched = true;
                    cards[secondIndex].isMatched = true;
                    clickedElement.classList.add("matched");
                    firstElement?.classList.add("matched");
                    playSound("good");
                    const matchedCards : Card[] = cards.filter(card => card.isMatched);
                    changePercentage((matchedCards.length/TOTAL_CARDS) * 100);
                    firstFlippedIndex = -1;

                    if (matchedCards.length === TOTAL_CARDS) {
                        stopBackground();
                        playSound("game-over");
                        showGameCompletePopup();
                    }
                } else {
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