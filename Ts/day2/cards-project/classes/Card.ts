class Card {
    isMatched : boolean;
    isFlipped : boolean;
    source : string;

    constructor(_isFlipped : boolean = false, _source : string = "", _isMatched : boolean = false){
        this.isFlipped = _isFlipped;
        this.isMatched = _isMatched;
        this.source = _source;
    }
}

export default Card