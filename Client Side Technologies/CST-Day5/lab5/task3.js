//first part

// let childWin;
// let intervalId;
// let y = 0;
// let step = 10;
// let direction = 1;

// function openWindow() {
//   y = 0;
//   direction = 1;

//   childWin = window.open(
//     "child.html",
//     "",
//     "width=300,height=200,alwaysRaised=yes"
//   );

//   intervalId = setInterval(() => {

//     const maxY = screen.availHeight - 200;
//     y += step * direction;

//     if (y <= 0 || y >= maxY) {
//       direction *= -1;
//     }

//     y = Math.max(0, Math.min(y, maxY));

//     childWin.moveTo(300, y);
//     childWin.focus();
//   }, 50);
// }

// function closeWindow() {
//   clearInterval(intervalId);
//   intervalId = null;
// }


//second part

//first

// let adWin;
// function openWindow() {
//   adWin = window.open("child.html", "", "width=400,height=300");

//   intervalId = setInterval(() => {
//     adWin.scrollBy(0, 2);
//     adWin.focus();
//   }, 50);
// }

// function closeWindow() {
//   clearInterval(intervalId);
// }

//second

let adWin;
let timeoutId;

function openWindow() {
  adWin = window.open("child.html", "", "width=400,height=300");
  scrollAd();
}

function scrollAd() {
  adWin.scrollBy(0, 2);
  adWin.focus()
  timeoutId = setTimeout(scrollAd, 50);
}

function closeWindow() {
  clearTimeout(timeoutId);
}