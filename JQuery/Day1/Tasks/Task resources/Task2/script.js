const headerDiv = document.getElementById("header");
headerDiv.style.textAlign = "right"
document.body.appendChild(headerDiv.cloneNode(true));
document.body.lastChild.style.textAlign = "left";
document.getElementById("navigation").style.textAlign = "center";
document.getElementById("nav").style.listStylePosition = "inside";