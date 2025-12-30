function largestWord(str) {
    let words = str.split(' ');
    let largest = "";
    for (let word of words) {
        if (word.length > largest.length) {
            largest = word;
        }
    }
    return largest;
}
let str = prompt("Enter a string:");

while (str === null || str.trim() === "") {
    str = prompt("Please enter a valid string:");
}

let largest = largestWord(str);
console.log(`The largest word in the string is: '${largest}'`);