const Sequence = function(start, end, step){
    let seq = [];

    if (step === 0) {
        throw new Error("Step cannot be zero");
    }

    this.getSequence = function(){
        return Array.from(seq);
    }


    const fillingFuncion = function(){
        const length = Math.floor((end - start) / step) + 1;
        if (length <= 0) return;
        seq = Array.from({ length }, (_, i) => start + i * step);
    }

    fillingFuncion();


    this.Append = function(val){
        if (seq.includes(val)) {
            throw new Error("Duplicate value not allowed");
        }
        if(val === seq[seq.length - 1] + step){
            seq.push(val);
            return ;
        }
        throw new Error("the value cannot be added because it doesn't match the sequence");
    }
    this.Prepend = function(val){
        if (seq.includes(val)) {
            throw new Error("Duplicate value not allowed");
        }
        if(val === seq[0] - step){
            seq.unshift(val);
            return ;
        }
        throw new Error("the value cannot be added because it doesn't match the sequence");
    }
    this.Dequeue = function(){
        if(seq.length !== 0){
            seq.shift();
            return ;
        }
        throw new RangeError("the list is empty !!");
    }
    this.Pop = function(){
        if(seq.length !== 0){
            seq.pop();
            return ;
        }
        throw new RangeError("the list is empty !!");
    }
}