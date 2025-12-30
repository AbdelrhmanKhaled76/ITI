let Name = prompt("Enter your name:");

while (Name === null || Name.trim() === "" || !isNaN(Name)) {
    Name = prompt("Please enter a valid name:");
}

let PhoneNumber = prompt("Enter your phone number:");

while (PhoneNumber === null || PhoneNumber.trim() === "" || PhoneNumber.length !== 8 || isNaN(PhoneNumber)) {
    PhoneNumber = prompt("Please enter a valid phone number:");
}

let MobileNumber = prompt("Enter your mobile number:");

while (MobileNumber === null || MobileNumber.trim() === "" || MobileNumber.length !== 11 || isNaN(MobileNumber) || !/^01[0-2]/.test(MobileNumber)) {
    MobileNumber = prompt("Please enter a valid mobile number:");
}

let Email = prompt("Enter your email:");

while (Email === null || Email.trim() === "" || !/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.com$/.test(Email)) {
    Email = prompt("Please enter a valid email:");
}

let Color = prompt("Enter your favorite color between red, green, or blue:");

while (Color === null || Color.trim() === "" || !["red", "green", "blue"].includes(Color.toLowerCase())) {
    Color = prompt("Please enter a valid color (red, green, or blue):");
}

let style = "";

if (Color === "red") {
  style = "color: red;";
} else if (Color === "green") {
  style = "color: green;";
} else if (Color === "blue") {
  style = "color: blue;";
}

console.log("%cUser Information:", style);
console.log("%cName: " + Name, style);
console.log("%cPhone Number: " + PhoneNumber, style);
console.log("%cMobile Number: " + MobileNumber, style);
console.log("%cEmail: " + Email, style);
console.log("%cFavorite Color: " + Color, style);
console.log("%cToday's date is: " + new Date().toLocaleDateString(), style);
