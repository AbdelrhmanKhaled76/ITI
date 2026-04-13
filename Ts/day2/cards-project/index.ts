import Card from "./classes/Card.js"
import initializeCards from "./utils/initializeCards.js";
import shufflingLogic from "./utils/shuffeling.js";
import renderCards from "./utils/renderCards.js";
import cardFlipping from "./utils/cardFlipping.js";
import changePercentage from "./utils/percentage.js";
import { playBackground } from "./utils/audioManager.js";

const Cards : Card[] = initializeCards();

shufflingLogic(Cards);

const setupGame = () : void => {
    changePercentage(0);
    renderCards(Cards);
    cardFlipping(Cards);
    playBackground();

    const startMusicOnInteraction = () => {
        playBackground();
        document.body.removeEventListener('click', startMusicOnInteraction);
    };

    document.body.addEventListener('click', startMusicOnInteraction, { once: true });
}

document.addEventListener('DOMContentLoaded', () => {
    setupGame();
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupGame();
    });
} else {
    setupGame();
}

