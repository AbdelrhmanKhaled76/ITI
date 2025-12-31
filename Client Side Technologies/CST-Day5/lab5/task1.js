const arr = [];

let size = Number(prompt("Enter a number to specify a size for the Array"));

while (isNaN(size) || size <= 0) {
    size = Number(prompt("Please enter a valid array size (positive number)!"));
}

for (let i = 0; i < size; i++) {
    let value = Number(prompt("Enter number " + (i + 1)));

    while (isNaN(value)) {
        value = Number(prompt("Please enter a valid number!"));
    }

    arr.push(value);
}

console.log("This is the original array:", arr);

arr.sort(function(a, b) {
    return a - b
});
console.log("Ascending sorted version:", arr);

arr.sort(function(a, b) {
    return b - a
});
console.log("Descending sorted version:", arr);
