let str = prompt("Enter a string:");

while (str === null || str.trim() === "") {
    str = prompt("Please enter a valid string:");
}

let confirmCase = confirm("Do you want case sensitive search? Click 'OK' for Yes and 'Cancel' for No.");

if (confirmCase === false) {
    str = str.toLowerCase();
}

console.log(str === str.split('').reverse().join('') ? "The string is a palindrome." : "The string is not a palindrome.");