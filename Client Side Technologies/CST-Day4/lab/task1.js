let str = prompt("Enter a string:");
while (str === null || str === "") {
    str = prompt("Please enter a valid string:");
}
while (str.length < 1) {
    str = prompt("String must be at least 1 character long. Please enter again:");
}
let chr = prompt("Enter a character to count number of occurrences : ");
while(chr === null || chr.trim() === "") {
    chr = prompt("Please enter a valid character:");
}
while (chr.length !== 1) {
    chr = prompt("Please enter exactly one character:");
}
let confirmCase = confirm("Do you want case sensitive search? Click 'OK' for Yes and 'Cancel' for No.");

let count = 0;
let searchStr = str;
let searchChr = chr;

if (confirmCase === false) {
    searchStr = str.toLowerCase();
    searchChr = chr.toLowerCase();
}

for (let i = 0; i < searchStr.length; i++) {
    if (searchStr[i] === searchChr) {
        count++;
    }
}

console.log(`The character '${chr}' occurs ${count} times in the string.`);
