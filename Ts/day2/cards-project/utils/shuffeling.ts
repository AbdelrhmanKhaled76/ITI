import Card from "../classes/Card.js";
import { TOTAL_CARDS } from "../constants/main.js";
import getRandomInt from "./randomRange.js";

function shufflingLogic(cards : Card[]) : void {
    for(let i : number = 0; i < TOTAL_CARDS; i++){
        const tempCard : Card = cards[i];
        let randIdx : number = getRandomInt(i, TOTAL_CARDS - 1);
        cards[i] = cards[randIdx];
        cards[randIdx] = tempCard;
    }
}

export default shufflingLogic;