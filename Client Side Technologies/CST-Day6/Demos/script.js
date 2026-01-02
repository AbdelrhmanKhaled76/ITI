// //function statement
// function fun () {} /////// hoisted

// setTimeout(function () {}, 2000) //callback,// fallback
// setInterval(function () {}, 2000)

// //function expression
// let x
// x = function () {} // anonymous function
// typeof x;// function
// x()

// x = 10
// x = 'sdf'
// x = {}
// x = []
// x = true
// x = function () {}

// var arr = [10, 'abc', {}, [], function () {}]
// var fn = arr[4]
// fn()

// var timeID

// function fun () {
//   console.log('setTimeout')
//   timeID = window.setTimeout(fun, 2000)
//   console.log('after timerid assignment')
// }

// fun()
// // clearTimeout(timeID)
// // function setTimeout(a,b){
// //     //count duration of b
// //     a()
// // }

// // function adding(a,b){
// //     return a+b;
// // }
// // adding()
///////////////////////////////////////////
//non-blocking,, single thread,, asynch behav,, synch,, interpretted,,,{LOOPING WITH TIMER FUN}

// var x = 10

console.log('start') //1
///////////////////////////
setTimeout(function () {
  console.log('first')
}, 2000) //3rd//8
////////////////////
setTimeout(function () {
  console.log('second')
}, 0) //1 inside Queue 5
/////////////////////////
function fun () {
  console.log('start fun exec') //2

  setTimeout(function () {
    console.log('timeout inside fun 2000ms') //9
  }, 2000) //9

  setTimeout(function () {
    console.log('timeout inside fun 500 ms') //7
  }, 500) //7

  console.log('end fun exec') //3
}
///////////////////////////////////
setTimeout(function () {
  console.log('third')
}, 500) //6
///////////////////////////////
fun()
console.log('end') //4

// for (i = 0; i < 5; i++) {
//   console.log('forLoop')
//   console.log('forLoop')
//   console.log('forLoop')
//   console.log('forLoop')

//   setTimeout(function () {
//     console.log('timeout in forloop')
//   }, 500)

// }

// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
// console.log("outside forloop")
//////

for (var i = 0; i < 5; i++) {
  console.log(i)
}

var i = 0
TimerID = setInterval(function () {
  console.log(i)
  i++
}, 1000)

clearInterval(TimerID)

// String Object =String API
