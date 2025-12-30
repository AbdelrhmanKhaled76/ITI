// let windowStop;

// function openWindow() {
//     const wind = window.open(
//         "child.html",
//         "",
//         "width=300,height=300"
//     );

//     wind.focus();

//     const step = 20;

//     windowStop = setInterval(() => {
//         if (wind.closed) {
//             clearInterval(windowStop);
//             return;
//         }

//         wind.moveBy(step, step);
//     }, 500);
// }

// function closeWindow() {
//     if (windowStop) {
//         clearInterval(windowStop);
//     }
// }


// second part
let closeWindow;

// function openWindow() {
//     const wind = window.open(
//         "child.html",
//         "",
//         "width=300,height=300"
//     );
//     closeWindow = setInterval(function(){
//         wind.scrollBy(
//             0,
//             2
//         );
//         wind.focus();
//     },50);
// }

let adWin;
let timeoutId;
let stop = false;

function openWindow() {
  stop = false;
  adWin = window.open("child.html", "", "width=400,height=300");
  scrollAd();
}

function scrollAd() {
  if (stop || !adWin || adWin.closed) return;

  adWin.scrollBy(0, 2);

  timeoutId = setTimeout(scrollAd, 50);
}

function stopScroll() {
  stop = true;
  clearTimeout(timeoutId);
}
