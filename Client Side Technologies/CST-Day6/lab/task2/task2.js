const headerElement = document.getElementById("header");
const infoElement = document.getElementById("information");
const image = document.getElementById("image");
const searchParams =  location.search.slice(1).split("&");


let userName,title , email, phone, address, gender;

let i = 0;
userName = searchParams[i].split("=")[1];
title = searchParams[++i].split("=")[1];
email = decodeURIComponent(searchParams[++i].split("=")[1]);
phone = searchParams[++i].split("=")[1];
address = searchParams[++i].split("=")[1];
gender = searchParams[++i].split("=")[1];


headerElement.innerText = "Welcome " + title + " " + userName;
infoElement.innerText =  "your data is : \nEmail: " + email + "\nPhone: " + phone + "\nAddress: " + address + "\nGender: " + gender;

if(gender === "male"){
    image.src = "male.avif";
}
else {
    image.src = "female.jpg";
}
console.log(navigator.userAgent);

if(!navigator.userAgent.includes("Chrome")){
    alert("use chrome browser for better exprience");
}