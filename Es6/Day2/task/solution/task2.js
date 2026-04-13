function* fibonacciByCount(n) {
    let [a, b] = [0, 1];
    let count = 0;

    while (count < n) {
        yield a;
        [a, b] = [b, a + b];
        count++;
    }
};

const countGen = fibonacciByCount(8);
console.log([...countGen]);


function* fibonacciByMax(max) {
    let [a, b] = [0, 1];

    while (a <= max) {
        yield a;
        [a, b] = [b, a + b];
    }
};

const maxGen = fibonacciByMax(50);
console.log([...maxGen]); 
