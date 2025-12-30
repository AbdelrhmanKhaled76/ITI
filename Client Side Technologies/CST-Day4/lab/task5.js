let raduis = prompt("Enter the radius of the circle:");

while (raduis === null || raduis.trim() === "" || isNaN(raduis) || Number(raduis) <= 0) {
    raduis = prompt("Please enter a valid radius:");
}

let area = Math.PI * Math.pow(Number(raduis), 2);
alert("The area of the circle with radius " + raduis + " is: " + area.toFixed(2));


let value = prompt("Enter a value : ");
while (value === null || value.trim() === "" || isNaN(value) || Number(value) < 0) {
    value = prompt("Please enter a valid non-negative number:");
}
alert("the square root of " + value + " is: " + Math.sqrt(Number(value)).toFixed(2));


let angle = prompt("Enter the first angle of the triangle (in degrees):");
while (angle === null || angle.trim() === "" || isNaN(angle) || Number(angle) <= 0 || Number(angle) >= 180) {
    angle = prompt("Please enter a valid angle between 0 and 180 degrees:");
}

console.log("The cosine of the angle " + angle + " degrees is: " + Math.cos(Number(angle) * (Math.PI / 180)).toFixed(2));