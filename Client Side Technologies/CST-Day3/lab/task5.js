let range = Number(prompt("Enter the range up to which you want to print even numbers: "));
let sum = 0;
if(isNaN(range) || range <= 0) {
    document.writeln("Invalid Range");
}
document.writeln("Number multiple of 3:");
for(let i = 1; i <= range; i++) {
    if(i % 3 === 0) {
        document.writeln(i + ",");
        sum += i;
    }
}
document.writeln("<br>Number multiple of 5:");
for(let i = 1; i <= range; i++) {
    if(i % 5 === 0) {
        document.writeln(i + ",");
        sum += i;
    }
}
document.writeln("<br>total sum is " + sum);