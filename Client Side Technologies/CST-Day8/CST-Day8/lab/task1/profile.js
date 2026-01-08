const welcomeName = document.getElementById("name-span");
const welcomePicture = document.getElementById("gender-picture");

const name = getCookie("name");
const color = getCookie("color");

welcomePicture.src = getCookie("gender");

welcomeName.innerText = name;
welcomeName.style.color = color;

const visitNumber = document.getElementById("visit-number");

const visitCookieName = "visit_" + name;
visitNumber.innerText = getCookie(visitCookieName);
visitNumber.style.color = color;
