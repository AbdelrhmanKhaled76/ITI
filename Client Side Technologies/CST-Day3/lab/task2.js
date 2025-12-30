let sum = 0;
while(true) {
    let input = Number(prompt("Enter a number to add to the sum"));
    if(isNaN(input)) {
        document.write("Invalid Number");
        break;
    }
    if(input === 0 || sum  > 100) {
        break;
    }
    sum += input;
}
document.write(`The total sum is: ${sum}`);