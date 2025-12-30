let starNumber = Number(prompt("Enter the number of stars"));

if(isNaN(starNumber) || starNumber <= 0) {
    document.writeln("Invalid Number");
}

for(let i = 1; i <= starNumber; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += "*";
    }
    document.writeln(row + "<br>");
}   

