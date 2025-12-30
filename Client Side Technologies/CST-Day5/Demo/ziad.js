var timerID
//   setInterval(x, y);

//function expression
var x = function () {
  console.log('hamada')
}

//   y=2000;
//   x=fun();
//   setInterval(fun(),y)
//   setInterval("fun()",2000)

x = setInterval('', 1000)
console.log('ay 7aga')

function StartTiming () {
  timerID = setInterval(function () {
    //callbackfunction
    //anonymous function
    alert('timeout')

    console.log('timing method')
  }, 5000)
  console.log('inside function')
  clearInterval(timerID)
}
function stopTiming () {
  clearInterval(timerID)
}
var win
function openWin () {
  win = open('Child.html', '', 'width=250,height=250')
}
function checkWin () {
  if (win.closed) console.log('child closed')
  else console.log('child still available')
}

function moveWin () {
  win.moveBy(250, 250)
  win.focus()
}
