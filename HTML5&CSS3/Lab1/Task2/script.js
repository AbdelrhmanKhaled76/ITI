const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const paragraph = document.getElementById("paragraph");

document.getElementById("main").addEventListener("input", function() {
    const r = redInput.value;
    const g = greenInput.value;
    const b = blueInput.value;

    paragraph.style.color = `rgb(${r}, ${g}, ${b})`;
});