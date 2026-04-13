import { TOTAL_CARDS } from "../constants/main.js";
import getRandomInt from "./randomRange.js";
function shufflingLogic(cards) {
    for (let i = 0; i < TOTAL_CARDS; i++) {
        const tempCard = cards[i];
        let randIdx = getRandomInt(i, TOTAL_CARDS - 1);
        cards[i] = cards[randIdx];
        cards[randIdx] = tempCard;
    }
}
export default shufflingLogic;
