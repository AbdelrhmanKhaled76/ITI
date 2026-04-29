import { TOTAL_CARDS } from "../constants/main.js";
const imageSources = [
    "./assets/images/1.jpg",
    "./assets/images/2.jpg",
    "./assets/images/3.jpg",
    "./assets/images/4.jpg",
    "./assets/images/5.jpg",
    "./assets/images/6.jpg",
    "./assets/images/7.jpg",
    "./assets/images/8.jpg",
    "./assets/images/9.jpg",
    "./assets/images/10.jpg"
];
function initializeCards() {
    const Cards = [];
    const PAIRS = TOTAL_CARDS / 2;
    for (let i = 0; i < PAIRS; i++) {
        // Pair 1
        Cards.push({
            isFlipped: false,
            source: imageSources[i],
            isMatched: false
        });
        // Pair 2
        Cards.push({
            isFlipped: false,
            source: imageSources[i],
            isMatched: false
        });
    }
    return Cards;
}
export default initializeCards;
export { imageSources };
