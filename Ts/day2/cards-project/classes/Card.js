class Card {
    isMatched;
    isFlipped;
    source;
    constructor(_isFlipped = false, _source = "", _isMatched = false) {
        this.isFlipped = _isFlipped;
        this.isMatched = _isMatched;
        this.source = _source;
    }
}
export default Card;
