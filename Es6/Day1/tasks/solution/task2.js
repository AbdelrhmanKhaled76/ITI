function highAndLow(...arr){
    const lowest = Math.min(...arr);
    const highest = Math.max(...arr);
    return {
        lowest,
        highest
    }
};

const arr = [3,2,4,6,1,5];

const { lowest, highest } = highAndLow(...arr);

console.log(lowest, highest);