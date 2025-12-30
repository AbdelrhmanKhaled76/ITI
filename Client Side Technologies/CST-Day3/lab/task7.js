let x = Number(prompt("Enter the base number for the range"));
let y = Number(prompt("Enter the limit number for the range"));
let z = prompt("Choose between odd or even or no");
let sum  = 0;
let rightParam = true;
if(isNaN(x) || isNaN(y) || x <= 0 || y <= 0 || (z !== "odd" && z !== "even" && z !== "no")) {
    document.writeln("Invalid Input");
    rightParam = false;
}

if(rightParam) {
    if(z === "odd"){
        for(let i = x; i <= y; i++) {
            if(i % 2 !== 0) {
                document.write(i + ", ");
                sum += i;
            }  
        }
    }
    else if (z === "even"){
        for(let i = x; i <= y; i++) {
            if(i % 2 === 0) {
                document.write(i + ", ");
                sum += i;
            }
        }
    }
    else {
        for(let i = x; i <= y; i++) {
            document.write(i + ", ");
            sum += i;
        }
    }
    document.writeln("The total sum is: " + sum);
}
else {
    document.writeln("Cannot perform the operation due to invalid input");
}
