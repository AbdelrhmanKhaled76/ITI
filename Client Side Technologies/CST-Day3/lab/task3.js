let input = Number(prompt("Enter first number for the comparison : "));
let input2 = Number(prompt("Enter second number for the comparison : "));
if(isNaN(input) || isNaN(input2)) 
    document.writeln("Invalid Number");
else
    document.writeln("the bigger number is : " + (input >= input2 ? input : input2));