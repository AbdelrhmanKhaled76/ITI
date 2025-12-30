let input = Number(prompt("Enter the first number : "));
let input2 = Number(prompt("Enter the second number : "));
let input3 = Number(prompt("Enter the third number : "));
if(isNaN(input) || isNaN(input2) || isNaN(input3)) 
    document.writeln("Invalid Number");
else if (input2 === 0 || input3 === 0)
    document.writeln("Division by zero is not allowed");
else {
    if(input % input2 === 0 && input % input3 === 0)
        document.writeln(input + " is divisible by both " + input2 + " and " + input3);
    else if(input % input2 === 0)
        document.writeln(input + " is divisible by " + input2 + " only");
    else if(input % input3 === 0)
        document.writeln(input + " is divisible by " + input3 + " only");
    else
        document.writeln(input + " is not divisible by either " + input2 + " or " + input3);
}